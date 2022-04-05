#!/bin/sh

adb devices
adb -s R3CR3139MRE reverse tcp:8081 tcp:8081