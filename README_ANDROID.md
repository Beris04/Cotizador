# Toyo Foods Comercial · Android V1

Esta carpeta convierte la App Comercial móvil (Visitas + Cotizador) en una aplicación Android con Capacitor.

## Qué ya está preparado

- App web empaquetada dentro del APK: ya no depende de GitHub Pages para abrir.
- Visitas y Cotizador funcionan como módulos internos.
- El inicio de sesión usa `sessionStorage`: al cerrar realmente la app y volverla a abrir se vuelve a solicitar contraseña; al cambiar de módulo o mandar la app al fondo no se borra la sesión inmediatamente.
- La visita activa, registros locales, cola de sincronización y borradores con prefijo `app_visitas_` se espejan a `Capacitor Preferences` para reforzar persistencia.
- GPS usa `Capacitor Geolocation` dentro de Android y mantiene fallback web.
- Imagen de cotización usa el panel nativo de compartir de Android.
- PDF se guarda mediante `Capacitor Filesystem` en Documentos/ToyoFoods.
- El estado de red está preparado con `Capacitor Network`.
- Productos y clientes ya están dentro del paquete web, por lo que no necesitan descargarse de GitHub Pages para abrir.

## Opción A · Generar APK desde GitHub Actions

1. Crea un repositorio nuevo (recomendado: `Toyo-Comercial-Android`).
2. Sube TODO el contenido de esta carpeta al repositorio.
3. En GitHub entra a **Actions**.
4. Abre **Generar APK Android**.
5. Pulsa **Run workflow**.
6. Al terminar, descarga el artefacto **Toyo-Foods-Comercial-APK**.
7. Dentro estará `app-debug.apk` para instalar en Android.

## Opción B · Windows + Android Studio

Requisitos:
- Node.js 22
- Android Studio actualizado
- JDK compatible (Android Studio normalmente lo incluye)

Luego ejecuta `PREPARAR_ANDROID.bat`.

La primera ejecución instalará dependencias, creará la carpeta `android/`, copiará la app web y abrirá Android Studio.

## Actualizar la app después

Edita archivos dentro de `web/`. Después ejecuta:

    npm run android:sync

Y vuelve a compilar en Android Studio.

## Identidad

- App: **Toyo Foods Comercial**
- Package ID: `com.toyofoods.comercial`
- Versión inicial: 1.0.0

## Nota de seguridad

La contraseña compartida `Toyo2026` sigue siendo validación local del frontend y no es autenticación segura. En una fase posterior conviene migrar usuarios a Supabase Auth o un sistema equivalente.
