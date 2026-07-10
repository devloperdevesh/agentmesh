package control

import (
	"time"
)


// CreateCheckpoint stores the current workflow state
// and persists it through storage backend.
func (c *Controller) CreateCheckpoint(
	id string,
	step uint64,
	payload []byte,
) error {

	c.mu.Lock()
	defer c.mu.Unlock()


	workflow, exists := c.workflows[id]

	if !exists {
		return ErrWorkflowNotFound
	}


	checkpoint := &Checkpoint{

		ID: id,

		WorkflowID: id,

		Step: step,

		Payload: payload,

		CreatedAt: time.Now(),
	}


	// Update in-memory workflow state
	workflow.Checkpoint = checkpoint

	workflow.CurrentStep = step

	workflow.UpdatedAt = time.Now()



	// Persist checkpoint
	if c.storage != nil {

		err := c.storage.Save(
			id,
			payload,
		)

		if err != nil {
			return err
		}
	}



	// Record telemetry event
	if c.telemetry != nil {

		c.telemetry.RecordCheckpoint()
	}



	return nil
}



// RestoreCheckpoint retrieves the latest
// checkpoint state of a workflow.
func (c *Controller) RestoreCheckpoint(
	id string,
) (*Checkpoint, error) {

	c.mu.RLock()
	defer c.mu.RUnlock()



	workflow, exists := c.workflows[id]

	if !exists {
		return nil, ErrWorkflowNotFound
	}



	if workflow.Checkpoint == nil {
		return nil, ErrCheckpointNotFound
	}



	return workflow.Checkpoint, nil
}