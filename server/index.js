const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const routers = require('./routers');
const response = require('./middleware/response');
const app = new Koa();
let config = require('./config');

app.use(logger());
app.use(koaBody());
app.use(response());
routers(app);

app.listen(config.port, () => {
    console.log(`${new Date()} ===> [${config.env}] on http://localhost:${config.port} ...`);
});
