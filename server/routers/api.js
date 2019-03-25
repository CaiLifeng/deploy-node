const KoaRouter = require( 'koa-router');
const router = new KoaRouter();

const controller = require('../controllers');

router.prefix('/api');
router.get('/getHosts', controller.getHosts);

module.exports = router;