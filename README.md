# Restman Web-Menu Interface


### 1. Установка зависимостей
* Установить Node.js (.exe)
* Проверить наличие Node.js и npm (должен выдать номер версии) `node -v && npm -v`
* Установить глобально http-server `npm install -g http-server`



### 2. Запустить Backend
[Backend Код](https://github.com/SherzodAli/restman_web_menu_api)
* Скачать .zip backend-меню и разархивировать
* Скачать зависимости backend `cd $PATH_TO_BACKEND_FOLDER && npm install`
* Указать информацию о БД в config.js (user, password)
* Запустить backend `npm run serve --prefix "$PATH_TO_BACKEND_FOLDER"`


### 3. Запустить Frontend
[Frontend Код](https://github.com/SherzodAli/restman_web_menu)
* Запустить http-server для доступа к картинкам
```shell
http-server "$PATH_TO_IMAGE_FOLDER"
```
* Скачать .zip frontend-меню и разархивировать
* Скачать зависимости frontend-меню
```shell
cd $PATH_TO_FRONTEND_FOLDER && npm install
```
* Запустить frontend-меню 
```shell
set REACT_APP_SERVER_IP=$SERVER_IP && set REACT_APP_SERVER_API_PORT=8000 && set REACT_APP_SERVER_IMAGES_PORT=8080 && npm start --prefix "$PATH_TO_FRONTEND_FOLDER"
```


### 4. Повторный запуск Веб-меню через C#
* Запуск http-server для картинок
```shell
http-server "$PATH_TO_IMAGE_FOLDER"
```
* Запуск backend-меню
```shell
npm run serve --prefix "$PATH_TO_BACKEND_FOLDER"
```
* Запуск frontend-меню
```shell
set REACT_APP_SERVER_IP=$SERVER_IP && set REACT_APP_SERVER_API_PORT=8000 && set REACT_APP_SERVER_IMAGES_PORT=8080 && npm start --prefix "$PATH_TO_FRONTEND_FOLDER"
```