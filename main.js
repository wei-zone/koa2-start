const Koa = require('koa')const logger = require('./src/middleWare/logger')const app = new Koa()app    .use(logger)    .use(async ctx => {        ctx.body = 'Hello Koa'    })app.listen(10086)console.log('server is running at http://localhost:10086')