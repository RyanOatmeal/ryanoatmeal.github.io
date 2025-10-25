#!/usr/bin/dash

wasm-pack build --target web
rm ./pkg/.gitignore
rm -r ../../src/getting_started/pkg/
cp -r ./pkg/ ../../src/getting_started/pkg/
