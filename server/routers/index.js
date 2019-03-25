/*global process */
module.exports = app => {
    app.use(require('./api').routes());
    //测试环境才展示案例
    app.use(require('./render').routes());
};