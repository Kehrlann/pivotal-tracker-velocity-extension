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

.PHONY: build
build: dist

.PHONY: run
run: build
	@npx web-ext run -s dist
