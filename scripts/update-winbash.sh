#!/bin/sh

cd ..

packwiz refresh

MINECRAFT_DIR="$HOME/AppData/Roaming/PrismLauncher/instances/Project Lime/minecraft"
KUBEJS_DIR="$MINECRAFT_DIR/kubejs"

rm -rf "$KUBEJS_DIR"
cp -r ./kubejs "$KUBEJS_DIR"
cp ./config/item_obliterator.json5 "$MINECRAFT_DIR/config/item_obliterator.json5"
cp ./config/almostunified/unify.json "$MINECRAFT_DIR/config/almostunified/unify.json"
