let success = (ctx) => {
    return (data = []) => {
        ctx.set('Content-type', 'application/json');
        ctx.body = {
            code: 0,
            message: '成功',
            data: data
        };
    }
}

let error = (ctx) => {
    return ( message = '服务器异常', code = 100,  data = []) => {
        ctx.set('Content-type', 'application/json');
        ctx.body = {
            code,
            message,
            data
        };
    }
}

module.exports = function () {
    return async function (ctx, next) {
        ctx.success = success(ctx);
        ctx.error = error(ctx);
        await next()
    }
}