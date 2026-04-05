#!/bin/sh

help_info() {
	printf 'reset-server - to remove server configuration files from all the saves\n'
}

if [ -z "$1" ]
then
	printf 'Mode not specified\n\n'
	help_info
	exit 1
fi

if [ "$OS" = 'Windows_NT' ]
then
	MINECRAFT_DIR="$HOME/AppData/Roaming/PrismLauncher/instances/Project Lime/minecraft"
else
	MINECRAFT_DIR="$HOME/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/instances/Project Lime/minecraft"
fi

cd ..

if [ "$1" = 'reset-server' ]
then
	find "$MINECRAFT_DIR/saves" -mindepth 1 -maxdepth 1 -type d -exec rm -rf "{}/serverconfig" \;
else
	printf 'Invalid mode specified\n\n'
	help_info
	exit 1
fi