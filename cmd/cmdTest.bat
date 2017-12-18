@echo off
title Verify Test
cls
color 2B
echo test script
echo what is your name?
set /p passIn=Name: 
set /p passOut=<testpass.txt
if %passIn%==%passOut% (
	echo it worked
	)
if not %passIn%==%passOut% (
	echo pass fail. success
	)
set /p nxt=What Now: 
if %nxt%==retry (
	cmdTest.bat
	)
if %nxt%==leave (
	exit
	)
pause