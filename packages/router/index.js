import KoaRouter from 'koa-router'
const router = new KoaRouter()

router.get('/', async function (ctx) {
  ctx.body = 'hello world'
})

export default router
