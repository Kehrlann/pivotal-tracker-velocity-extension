.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
SRC_FILES  := $(shell find src/ -type f -print)

node_modules: package.json
	@echo "💿 Installing..."
	npm install
	touch node_modules
	echo "💿 Installing: done ✅"

dist: node_modules manifest.json icons $(SRC_FILES)
	@echo "🚧 Building..."
	npx parcel build manifest.json
	echo "🚧 Building: done ✅"
	touch dist

.PHONY: build
build: dist ## Build typescript

.PHONY: clean
clean: ## Clean build dir and output dir
	rm -rf dist

.PHONY: dev
dev: build ## Continuously rebuild
	while true; do $(MAKE) --silent build  || $(MAKE) build; sleep 1; done

.PHONY: package
package: build
	@npx web-ext build -s dist

# TODO: publish release?