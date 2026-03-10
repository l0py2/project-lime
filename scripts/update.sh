#!/bin/sh

if [ -z "$1" ]
then
	printf 'Mode not specified\n\n'
	printf 'pull - to copy files from instance to repository\n'
	printf 'push - to copy files from repository to instance\n'
	exit 1
fi

if [ "$OS" = 'Windows_NT' ]
then
	MINECRAFT_DIR="$HOME/AppData/Roaming/PrismLauncher/instances/Project Lime/minecraft"
else
	MINECRAFT_DIR="$HOME/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/instances/Project Lime/minecraft"
fi

KUBEJS_DIR="$MINECRAFT_DIR/kubejs"
CONFIG_DIR="$MINECRAFT_DIR/config"
DEFAULT_SERVER_CONFIG_DIR="$MINECRAFT_DIR/defaultconfigs"
SAWMILL_DATA_DIR="$MINECRAFT_DIR/debug/generated_resource_pack/sawmill"

cd ..

if [ "$1" = 'pull' ]
then
	cp -rfT "$KUBEJS_DIR" ./kubejs
	cp -rfT "$CONFIG_DIR" ./config
	cp -rfT "$DEFAULT_SERVER_CONFIG_DIR" ./defaultconfigs

	if [ -d "$SAWMILL_DATA_DIR" ]
	then
		mv -fT "$SAWMILL_DATA_DIR" ./config/openloader/data/universal-sawmill-recipes/data/sawmill
	fi
	
	packwiz refresh
elif [ "$1" = 'push' ]
then
	cp -rfTv ./kubejs "$KUBEJS_DIR"
	cp -rfTv ./config "$CONFIG_DIR"
	cp -rfTv ./defaultconfigs "$DEFAULT_SERVER_CONFIG_DIR"
else
	printf 'Invalid mode specified\n\n'
	printf 'pull - to copy files from instance to repository\n'
	printf 'push - to copy files from repository to instance\n'
	exit 1
fi