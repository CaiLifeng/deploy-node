const {Branch} = require('../model/branch');

exports.getHosts = async (ctx) => {
    Branch.findAll().then(branchs => {
        console.log(branchs)
    })
    await ctx.success([1,2,3,4,5]);
    // await ctx.error();
};

exports.renderIndex = async (ctx) => {
    await ctx.render('index');
};