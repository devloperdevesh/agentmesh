package domain

import "time"

type WorkflowStatus string

const (
	StatusPending   WorkflowStatus = "pending"
	StatusRunning   WorkflowStatus = "running"
	StatusCompleted WorkflowStatus = "completed"
	StatusFailed    WorkflowStatus = "failed"
)

type Workflow struct {
	ID        string
	Name      string
	Status    WorkflowStatus
	CreatedAt time.Time
	UpdatedAt time.Time
}
