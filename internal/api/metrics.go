package api

import (
	"encoding/json"
	"net/http"
)


func MetricsHandler(
	w http.ResponseWriter,
	r *http.Request,
){

	json.NewEncoder(w).Encode(
		map[string]int{
			"active_workflows":0,
			"recoveries":0,
			"checkpoints":0,
		},
	)

}