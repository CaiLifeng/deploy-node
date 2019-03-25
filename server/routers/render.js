const KoaRouter = require( 'koa-router');
const router = new KoaRouter();
const controller = require('../controllers');

router.get('/getHosts', controller.getHosts);

module.exports = router;
exports.index = async (ctx)=>{
    await ctx.render('index');
}