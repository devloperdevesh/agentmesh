import {
    RuntimeMetrics,
    Worker,
    Checkpoint,
    RuntimeLog,
  } from "./types";
  
  
  export const mockMetrics: RuntimeMetrics = {
  
    cpu: 42,
  
    memory: 61,
  
    network: 180,
  
    goroutines: 128,
  
  };
  
  
  
  export const mockWorkers: Worker[] = [
  
    {
      id: "worker-01",
      role: "primary",
      status: "healthy",
      cpu: "28%",
      memory: "1.7GB",
      requests: 18421,
    },
  
  
    {
      id: "worker-02",
      role: "standby",
      status: "recovering",
      cpu: "17%",
      memory: "1.1GB",
      requests: 8921,
    },
  
  ];
  
  
  
  export const mockCheckpoints: Checkpoint[] = [
  
    {
      id: "cp-1024",
      workerId: "worker-01",
      size: "18MB",
      storage: "memory",
      createdAt: "2 min ago",
    },
  
  ];
  
  
  
  export const mockLogs: RuntimeLog[] = [
  
    {
      level: "INFO",
      message:
        "Gateway heartbeat received",
      timestamp:
        "10:02:12",
    },
  
  
    {
      level: "CHECKPOINT",
      message:
        "Checkpoint created successfully",
      timestamp:
        "10:03:20",
    },
  
  ];