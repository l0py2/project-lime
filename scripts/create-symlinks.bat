@echo off

cd /D %~dp0

cd ..

set repo=%cd%
set instance="%HOMEDRIVE%%HOMEPATH%\AppData\Roaming\PrismLauncher\instances\Project Lime\minecraft"

rmdir /S /Q %instance%\kubejs
del %instance%\kubejs
mklink /D %instance%\kubejs %repo%\kubejs

rmdir /S /Q %instance%\config
del %instance%\config
mklink /D %instance%\config %repo%\config

rmdir /S /Q %instance%\defaultconfigs
del %instance%\defaultconfigs
mklink /D %instance%\defaultconfigs %repo%\defaultconfigs

pause