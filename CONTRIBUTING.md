# Contributing to AgentMesh

We welcome contributions to the proxy core, telemetry engine, and local state isolation layers!

## Local Development Setup
1. Clone the repo: `git clone https://github.com/devloperdevesh/agentmesh`
2. Run the local daemon: `go run cmd/daemon/main.go`
3. Spin up the benchmark harness inside `data-plane/agent_sim/`

## Contribution Guidelines
- All core proxy changes must go inside `internal/api/` or `internal/control/`.
- Ensure memory allocations are checked using Go benchmarks (`go test -bench=.`).
- Open a Pull Request targeting the `main` branch with a clear trace logging dump.
