package control

func (c *Controller) Recover(id string) error {

	cp, err := c.RestoreCheckpoint(id)

	if err != nil {
		return err
	}

	return c.Resume(cp.WorkflowID)

}
