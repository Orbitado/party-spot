# 1. Usa una imagen base
FROM node:18.19.1-alpine

# 2. Establece el directorio de trabajo en el contenedor
WORKDIR /app

# 3. Copia el package.json y package-lock.json
COPY package*.json ./

# 4. Instala las dependencias
RUN npm install

# 5. Copia el resto de la aplicación al contenedor
COPY . .

# 6. Exponer el puerto para el servidor de desarrollo (opcional para producción)
EXPOSE 3000

# 7. Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
