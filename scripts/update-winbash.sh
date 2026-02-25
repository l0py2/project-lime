#!/bin/sh

cd ..

MINECRAFT_DIR="$HOME/AppData/Roaming/PrismLauncher/instances/Project Lime/minecraft"
KUBEJS_DIR="$MINECRAFT_DIR/kubejs"
SAWMILL_DATA_DIR="$MINECRAFT_DIR/debug/generated_resource_pack/sawmill"

if [ -d "$SAWMILL_DATA_DIR" ]
then
	rm -rf ./config/openloader/data/universal-sawmill-recipes/data/sawmill
	mv "$SAWMILL_DATA_DIR" ./config/openloader/data/universal-sawmill-recipes/data/sawmill
fi

packwiz refresh

rm -rf "$KUBEJS_DIR"
cp -r ./kubejs "$KUBEJS_DIR"
rm -rf "$MINECRAFT_DIR/config/openloader/data"
rm -rf "$MINECRAFT_DIR/config/openloader/resources"
cp -r ./config "$MINECRAFT_DIR"