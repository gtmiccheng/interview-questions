# Define default target
.DEFAULT_GOAL := help
.PHONEY: help install-dependencies run test

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build-container: ## Build the To Do List container locally
	docker build -t ghcr.io/gtmiccheng/todolist-app .

run: ## Starts the To Do List app
	docker run -p 3000:3000 -p 5173:5173 ghcr.io/gtmiccheng/todolist-app

push-container: ## Push to remote
	@echo ${GITHUB_TOKEN} | docker login ghcr.io -u gtmiccheng --password-stdin
	docker push ghcr.io/gtmiccheng/todolist-app