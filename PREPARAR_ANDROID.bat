@echo off
setlocal
cd /d %~dp0

echo ========================================
echo TOYO FOODS - PREPARAR APP ANDROID
echo ========================================
echo.
where node >nul 2>nul || (echo ERROR: instala Node.js 22 y vuelve a ejecutar.& pause & exit /b 1)
call npm install || goto :error
if not exist android (
  call npm run android:init || goto :error
) else (
  call npm run android:sync || goto :error
)
call npx cap open android
exit /b 0
:error
echo.
echo Ocurrio un error preparando Android.
pause
exit /b 1
