# Instrucciones para ejecutar el proyecto con Docker

## 1. Clonación del repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/Orbitado/party-spot.git
cd party-spot
```

## 2. Construir la imagen de Docker (docker-compose.yml)

Si el proyecto contiene un `Dockerfile` (y no un `docker-compose.yml`), puedes construir la imagen de Docker manualmente ejecutando:

```bash
docker build -t <nombre-de-la-imagen> .
```

## 3. Ejecutar el contenedor

Una vez que la imagen esté construida, puedes ejecutar el contenedor utilizando:

```bash
docker run -p 3000:3000 <nombre-de-la-imagen>
```

Esto mapeará el puerto `3000` en el contenedor al puerto `3000` en tu máquina local.

## 4. Usando `docker-compose.yml`

Si el repositorio contiene un archivo `docker-compose.yml`, puedes levantar el contenedor más fácilmente con:

```bash
docker-compose up
```

Esto construirá la imagen (si no existe) y levantará el contenedor según las configuraciones definidas en `docker-compose.yml`.

## 5. Verificar la aplicación

Una vez que el contenedor esté en ejecución, abre tu navegador y visita la siguiente URL:

```
http://localhost:3000
```

## Problemas comunes

- **Problemas de permisos de Docker**: Si encuentras errores de permisos con Docker, asegúrate de que tu usuario esté en el grupo `docker` o ejecuta los comandos con `sudo`.
- **Puertos ocupados**: Si el puerto `3000` está en uso en tu máquina, puedes modificar la configuración de puertos en el archivo `docker-compose.yml` o pasar un puerto diferente al ejecutar `docker run`.
