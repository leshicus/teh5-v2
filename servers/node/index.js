const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello from website0';
  console.log('ctx', ctx);
});

app.listen(3000);
console.log('listen: 3000');
