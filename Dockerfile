# Используем официальный образ Node.js в качестве базового образа
FROM node:16 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения внутрь контейнера
COPY . .

# Собираем приложение
RUN npm run build

# Используем легковесный образ Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа в рабочую директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Опционально: копируем файл конфигурации Nginx (если необходимо)
# COPY nginx.conf /etc/nginx/nginx.conf

# Опционально: пробрасываем порт, если требуется доступ к Nginx извне
# EXPOSE 80

# Команда запуска Nginx при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
