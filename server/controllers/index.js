const { Branch } = require('../model/branch');

exports.getHosts = async (ctx) => {
    let branches = await Branch.findAll();
    await ctx.success(branches);
    // await ctx.error();
};

exports.renderIndex = async (ctx) => {
    await ctx.render('index');
};