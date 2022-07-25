# Restman Web-Menu Interface


### 1. Установка зависимостей
* Установить Node.js. Для [win 8, 10, 11](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi) | для [win 7](https://nodejs.org/dist/v13.14.0/node-v13.14.0-x64.msi)
* Проверить наличие Node.js и npm (должен выдать номер версии) `node -v && npm -v`
* Установить глобально http-server `npm install -g http-server`



### 2. Запустить Backend
1. Скачать [.zip backend](https://github.com//SherzodAli/restman_web_menu/archive/refs/heads/main.zip) и разархивировать
2. Скачать зависимости backend   
`$PATH_TO_BACKEND_FOLDER` - путь к папке backend  

    ```shell
    cd "$PATH_TO_BACKEND_FOLDER" && npm install
    ```
3. Указать информацию о БД в config.js (user, password)
4. Запустить backend  
`$PATH_TO_BACKEND_FOLDER` - путь к папке backend  
   ```shell
   npm run serve --prefix "$PATH_TO_BACKEND_FOLDER"
   ```


### 3. Запустить Frontend
1. Скачать [.zip frontend](https://github.com//SherzodAli/restman_web_menu/archive/refs/heads/main.zip) и разархивировать
2. Скачать зависимости frontend  
`$PATH_TO_FRONTEND_FOLDER` - путь к папке с frontend  

    ```shell
    cd "$PATH_TO_FRONTEND_FOLDER" && npm install
    ```
3. Запустить frontend  
`$SERVER_IP` - IP сервера  
`$PATH_TO_FRONTEND_FOLDER` - путь к папке с frontend
    ```shell
    set REACT_APP_SERVER_IP=$SERVER_IP && set REACT_APP_SERVER_API_PORT=8000 && set REACT_APP_SERVER_IMAGES_PORT=8080 && npm start --prefix "$PATH_TO_FRONTEND_FOLDER"
    ```
4. Запустить http-server для доступа к картинкам  
`$PATH_TO_IMAGE_FOLDER` - путь к папке с фотографиями
    ```shell
    http-server "$PATH_TO_IMAGE_FOLDER"
    ```


### Повторный запуск Веб-меню через C#
* Запуск http-server для картинок  
`$PATH_TO_IMAGE_FOLDER` - путь к папке с фотографиями  

    ```shell
    http-server "$PATH_TO_IMAGE_FOLDER"
    ```
* Запуск backend-меню  
`$PATH_TO_BACKEND_FOLDER` - путь к папке backend  

    ```shell
    npm run serve --prefix "$PATH_TO_BACKEND_FOLDER"
    ```
* Запуск frontend-меню  
`$SERVER_IP` - IP сервера  
`$PATH_TO_FRONTEND_FOLDER` - путь к папке с frontend  

    ```shell
    set REACT_APP_SERVER_IP=$SERVER_IP && set REACT_APP_SERVER_API_PORT=8000 && set REACT_APP_SERVER_IMAGES_PORT=8080 && npm start --prefix "$PATH_TO_FRONTEND_FOLDER"
    ```