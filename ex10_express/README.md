1- установить express глобально
ввести в консоле: npm install -g express-generator

2- создать приложение с нужными нам параметрами
ввести в консоле: express --no-view --git
--no-view        use static html instead of view engine

3- установить зависимости
ввести в консоле: npm install

4- в package.json в скриптах пишем следующее:
    "start": "node ./bin/www",
    "debug": "set DEBUG=ex10-express:* && node ./bin/www"

5- запустить приложение
ввести в консоле: npm run debug

6- открыть в браузере страницу с хостом отладки (localhost:3000/)

7- перебрать структуру приложения, на ecmascrypt модуль

8- в папке проекта/bin/www меняем все var на const
reolace - Ctrl + h

9- в папке проекта в app.js меняем все var на const
reolace - Ctrl + h

10- в app.js меняем подключение с require на import
до    const express = require('express');
после import express from "express";
до    const path = require('path');
после import path from "node:path";
до    const cookieParser = require('cookieParser');
после import cookieParser from "cookie-parser";
до    const logger = require('morgan');
после import logger from "morgan";
до    const indexRouter = require('./routes/index');
      const usersRouter = require('./routes/users');
после import indexRouter from "./routes/index.js";
      import usersRouter from './routes/users.js';
до    module.exports = app;
после export default app;

11- в ./routes/index.js меняем подключение с require на import
до    const express = require('express');
после import express from "express";
меняем все var на const
заменить module.exports = router;
      на export default router;

12- ./routes/users меняем подключение с require на import
до       const express = require('express');
после    import express from "express";
меняем все var на const
заменить module.exports = router;
      на export default router;

13- в папке проекта/bin/www меняем подключение с require на import
до       const app = require('../app');
после    import app from '../app.js';
до       const debug = require('debug')('ex10-express:server');
после    import createDebugMessages from 'debug';
         const debug = createDebugMessages('ex10-express:server');
до       const http = require('http');
после    import http from 'http';

14- в app.js не будет dirname, поэтому пишем
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const __filename = __fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

15- в package.json ставим type модуль, т.к. по умолчанию он commonjs
пишем "type": "module",