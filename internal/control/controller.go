package control

import (
	"sync"
)

type Controller struct {
	mu sync.RWMutex

	workflows map[string]*Workflow
}

func NewController() *Controller {

	return &Controller{
		workflows: make(map[string]*Workflow),
	}

}

func (c *Controller) Get(id string) (*Workflow, error) {

	c.mu.RLock()
	defer c.mu.RUnlock()

	w, ok := c.workflows[id]

	if !ok {
		return nil, ErrWorkflowNotFound
	}

	return w, nil
}
