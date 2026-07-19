export interface RuntimeMetrics {
  cpu: number;
  memory: number;
  network: number;
  goroutines: number;
}


export interface Worker {
  id: string;

  role:
    | "primary"
    | "standby";

  status:
    | "healthy"
    | "recovering"
    | "offline";

  cpu: string;
  memory: string;
  requests: number;
}


export interface Checkpoint {
  id: string;
  workerId: string;
  size: string;
  storage: string;
  createdAt: string;
}


export interface RuntimeLog {
  level:
    | "INFO"
    | "WARN"
    | "ERROR"
    | "RECOVERY"
    | "CHECKPOINT";

  message: string;
  timestamp: string;
}


export interface HealthStatus {
  status:
    | "healthy"
    | "degraded";

  version: string;
}


/**
 * GitOps State Diff
 * Used for checkpoint comparison
 */

export type VariableDiffType =
  | "modified"
  | "added"
  | "removed"
  | "unchanged";


export interface VariableDiffData {
  key: string;
  before: string;
  after: string;
  type: VariableDiffType;
}