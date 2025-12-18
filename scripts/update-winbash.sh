#!/bin/sh

cd ..

packwiz refresh

MINECRAFT_DIR="$HOME/AppData/Roaming/PrismLauncher/instances/Project Lime/minecraft"
KUBEJS_DIR="$MINECRAFT_DIR/kubejs"

rm -rf "$KUBEJS_DIR"
cp -r ./kubejs "$KUBEJS_DIR"
cp -r ./config "$MINECRAFT_DIR"