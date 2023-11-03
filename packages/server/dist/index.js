import Koa from 'koa';
import router from '@typescript-example/router';
const app = new Koa();
app.use(router.routes());
app.listen(3000);
console.log("listen on http://localhost:3000");
