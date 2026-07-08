# Contributing

Thank you for your interest in contributing to AgentMesh.

The project is under active development, and contributions of all sizes are welcome. Whether you are fixing a bug, improving documentation, adding tests, or implementing a new feature, please follow the guidelines below to help keep the codebase consistent and maintainable.

---

# Before You Start

Before opening an issue or pull request:

- Search existing issues and pull requests.
- Read the project documentation.
- Verify that your change aligns with the project goals.
- Keep changes focused on a single concern.

Large architectural changes should be discussed through an issue before implementation.

---

# Development Environment

## Requirements

Install the following tools before contributing.

| Tool | Version |
|------|---------|
| Go | 1.23 or newer |
| Python | 3.11 or newer |
| Docker | Latest |
| Docker Compose | Latest |
| Git | Latest |

---

## Clone the Repository

```bash
git clone https://github.com/devloperdevesh/agentmesh.git

cd agentmesh
```

---

## Start the Development Environment

```bash
docker compose up --build
```

Run the gateway.

```bash
go run ./cmd/daemon
```

Run the example worker.

```bash
python data-plane/agent_sim/main.py
```

---

# Repository Structure

```text
cmd/
    daemon/

internal/
    api/
    control/
    gateway/
    storage/
    telemetry/

data-plane/
    agent_sim/

deployments/

docs/
```

Each directory has a single responsibility.

Avoid introducing cross-package dependencies unless required.

---

# Development Principles

Contributions should follow these principles.

## Keep Changes Small

Each pull request should address one problem.

Avoid combining unrelated fixes into a single contribution.

---

## Prefer Simplicity

Simple implementations are easier to review and maintain.

Avoid unnecessary abstractions.

---

## Write Readable Code

Code should be understandable without extensive comments.

Prefer descriptive names over clever implementations.

---

## Keep Packages Focused

Each package should own a specific responsibility.

Avoid creating generic utility packages.

---

# Coding Style

General expectations:

- Follow standard Go formatting.
- Keep functions focused.
- Return early where appropriate.
- Handle errors explicitly.
- Avoid unnecessary global state.
- Keep interfaces small.

Before submitting changes, run:

```bash
go fmt ./...
```

```bash
go vet ./...
```

---

# Branch Naming

Use descriptive branch names.

Examples:

```text
feature/grpc-gateway

feature/checkpoint-storage

feature/otel-exporter

fix/recovery-timeout

fix/checkpoint-race

docs/update-readme

docs/architecture
```

Avoid generic names such as:

```text
new

changes

update

work

testing
```

---

# Commit Messages

Write commit messages in the imperative mood.

Good examples:

```text
Add checkpoint storage abstraction

Implement gateway health checks

Improve recovery logging

Refactor routing package

Update architecture documentation
```

Avoid messages like:

```text
changes

update

fix

work

done

final
```

Commit history should explain the evolution of the project without requiring additional context.

---

# Keeping Pull Requests Focused

A pull request should answer one question.

Examples:

- Does this improve routing?
- Does this fix recovery?
- Does this improve documentation?
- Does this add tests?
---

# Pull Request Process

All changes should be submitted through a pull request.

The preferred workflow is:

```text
Fork Repository
        │
        ▼
Create Feature Branch
        │
        ▼
Implement Changes
        │
        ▼
Run Tests
        │
        ▼
Update Documentation
        │
        ▼
Open Pull Request
        │
        ▼
Code Review
        │
        ▼
Merge
```

Keep pull requests focused.

Large changes are significantly harder to review than several small pull requests.

---

# Pull Request Checklist

Before submitting a pull request, verify the following.

- Project builds successfully.
- All tests pass.
- Documentation reflects the implementation.
- Public APIs remain consistent.
- No unnecessary dependencies were introduced.
- Commit history is clean.

If a change modifies runtime behavior, explain the reason in the pull request description.

---

# Testing

Every functional change should be validated.

Run the complete test suite.

```bash
go test ./...
```

Run benchmarks when performance-sensitive code changes.

```bash
go test -bench=. ./...
```

Run the race detector.

```bash
go test -race ./...
```

Run static analysis.

```bash
go vet ./...
```

Format all source files.

```bash
go fmt ./...
```

Code that does not build or fails existing tests should not be submitted.

---

# Benchmarking

Performance claims should be supported with measurements.

Useful benchmark metrics include:

| Metric | Description |
|---------|-------------|
| Throughput | Requests processed per second |
| Recovery Latency | Time required to restore execution |
| Memory Usage | Heap allocations during routing |
| CPU Usage | Gateway processing overhead |
| Allocation Count | Objects allocated per request |

Avoid optimization without benchmark data.

---

# Documentation

Documentation should evolve together with the implementation.

Update documentation whenever you:

- add new features
- remove functionality
- modify APIs
- change configuration
- introduce new deployment behavior

Documentation is considered part of the implementation.

---

# Code Review

Every contribution is reviewed before merging.

Review focuses on:

- correctness
- readability
- maintainability
- performance impact
- API consistency
- documentation quality

Feedback should remain constructive and specific.

---

# Review Expectations

Reviewers typically evaluate:

- Does the implementation solve the intended problem?
- Is the solution understandable?
- Can the implementation be simplified?
- Are edge cases handled?
- Is documentation updated?
- Are tests sufficient?

Code review is intended to improve the project, not simply approve changes.

---

# Continuous Integration

Every pull request should pass the project's CI pipeline.

Typical validation includes:

| Check | Required |
|--------|----------|
| Build | Yes |
| Unit Tests | Yes |
| Formatting | Yes |
| Static Analysis | Yes |
| Documentation | Recommended |
| Benchmarks | When Applicable |

Pull requests that fail automated validation should be updated before review.

---

# Dependency Management

Dependencies should remain minimal.

Before adding a new dependency, consider:

- Is the standard library sufficient?
- Does the dependency solve a long-term problem?
- Is the project actively maintained?
- Is the additional complexity justified?

Reducing dependency surface improves maintainability and security.

---

# API Changes

Public APIs should evolve carefully.

When modifying an exported interface:

- document the change
- preserve backward compatibility when practical
- explain migration steps if required

Breaking changes should be introduced intentionally rather than accidentally.

---

# Performance Changes

When modifying routing, storage, or recovery logic:

- include benchmark results
- explain expected performance impact
- avoid speculative optimization
- preserve correctness before optimization

Reliable systems are preferred over fast but unpredictable systems.

---

# Error Handling

Errors should provide useful operational context.

Prefer explicit error handling over silent failures.

Examples include:

- returning descriptive errors
- wrapping underlying failures
- logging unexpected conditions
- avoiding panic except for unrecoverable startup failures

Operational visibility is more valuable than hiding errors.

---
---

# Reporting Issues

If you encounter a bug, please open an issue before submitting a fix if the problem has not already been reported.

A good issue should include:

- environment information
- operating system
- Go version
- reproduction steps
- expected behavior
- observed behavior
- logs or stack traces when available

Minimal reproducible examples help maintainers investigate problems more efficiently.

---

# Feature Requests

Feature requests are welcome.

When proposing a new feature, explain:

- the problem being solved
- why existing behavior is insufficient
- the proposed solution
- possible alternatives
- expected operational impact

Requests that align with the project's design principles are more likely to be accepted.

---

# Security Issues

Do not report security vulnerabilities through public issues.

Please follow the process described in `SECURITY.md`.

This allows vulnerabilities to be investigated and addressed responsibly before public disclosure.

---

# Release Process

Releases follow a simple workflow.

```text
Development

      │

      ▼

Testing

      │

      ▼

Documentation Review

      │

      ▼

Version Tag

      │

      ▼

GitHub Release
```

Each release should include:

- release notes
- compatibility information
- migration notes when required
- documentation updates

---

# Maintainer Responsibilities

Maintainers are responsible for preserving the long-term quality of the project.

Responsibilities include:

- reviewing pull requests
- maintaining documentation
- triaging issues
- planning releases
- ensuring build stability
- preserving architectural consistency

Maintainers may request changes before merging contributions.

---

# Project Scope

AgentMesh focuses on infrastructure for execution recovery.

Contributions outside the current scope may be deferred until the core platform reaches stability.

Examples include:

- unrelated orchestration frameworks
- model-specific integrations
- experimental research projects
- UI dashboards unrelated to core infrastructure

Maintaining a clear scope helps keep the project focused.

---

# Community Expectations

All contributors are expected to:

- communicate respectfully
- provide constructive feedback
- assume good intent
- discuss technical decisions with evidence
- keep discussions focused on the project

Technical disagreements are expected and should be resolved through discussion and measurable results.

---

# Support

Before opening an issue:

- read the documentation
- search existing issues
- verify the problem on the latest version
- provide reproduction steps

Questions without sufficient context are difficult to investigate.

---

# Documentation Standards

Documentation should be:

- technically accurate
- concise
- implementation-focused
- updated alongside code changes

Avoid marketing language or unsupported claims.

Examples and diagrams should reflect the current implementation.

---

# Long-Term Goals

The project aims to remain:

- simple to understand
- straightforward to contribute to
- easy to operate
- predictable to maintain

New features should improve reliability without introducing unnecessary complexity.

---

# License

By contributing to AgentMesh, you agree that your contributions will be licensed under the Apache License 2.0.

See the `LICENSE` file for details.

---

# Questions

If you are unsure whether a contribution fits the project, open a discussion before beginning implementation.

Early design discussions are encouraged for significant architectural changes.

Thank you for contributing to AgentMesh.
If the answer is "multiple things," consider splitting the work into separate pull requests.

---
