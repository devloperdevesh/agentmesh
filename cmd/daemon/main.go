package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/devloperdevesh/agentmesh/internal/api"
	"github.com/devloperdevesh/agentmesh/internal/control"
	"github.com/devloperdevesh/agentmesh/internal/storage"
	"github.com/devloperdevesh/agentmesh/internal/telemetry"
)

func main() {

	// -------------------------------------------------
	// Initialize Storage Layer
	// -------------------------------------------------

	store := storage.NewMemoryStore()

	// -------------------------------------------------
	// Initialize Telemetry Layer
	// -------------------------------------------------

	registry := telemetry.NewRegistry()

	collector := telemetry.NewCollector(
		registry,
	)

	// -------------------------------------------------
	// Initialize Control Plane
	// -------------------------------------------------

	controller := control.NewController(
		store,
		collector,
	)

	// -------------------------------------------------
	// Initialize API Layer
	// -------------------------------------------------

	router := api.NewRouter(
		controller,
	)

	// -------------------------------------------------
	// HTTP Server Configuration
	// -------------------------------------------------

	server := &http.Server{

		Addr: ":8080",

		Handler: router,

		ReadTimeout: 10 * time.Second,

		WriteTimeout: 10 * time.Second,

		IdleTimeout: 60 * time.Second,
	}

	log.Println("===================================")
	log.Println(" AgentMesh Control Plane ")
	log.Println(" Environment: local ")
	log.Println(" HTTP Server: :8080 ")
	log.Println(" Storage: MemoryStore ")
	log.Println(" Telemetry: Enabled ")
	log.Println("===================================")

	// -------------------------------------------------
	// Start HTTP Server
	// -------------------------------------------------

	go func() {

		err := server.ListenAndServe()

		if err != nil &&
			err != http.ErrServerClosed {

			log.Fatalf(
				"server failed: %v",
				err,
			)
		}

	}()

	// -------------------------------------------------
	// Graceful Shutdown Handling
	// -------------------------------------------------

	stop := make(chan os.Signal, 1)

	signal.Notify(
		stop,
		syscall.SIGINT,
		syscall.SIGTERM,
	)

	<-stop

	log.Println(
		"Shutdown signal received...",
	)

	ctx, cancel := context.WithTimeout(
		context.Background(),
		5*time.Second,
	)

	defer cancel()

	if err := server.Shutdown(ctx); err != nil {

		log.Fatalf(
			"graceful shutdown failed: %v",
			err,
		)
	}

	log.Println(
		"AgentMesh stopped cleanly.",
	)

}
