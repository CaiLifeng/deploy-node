'use strict';
/* global process , __dirname*/
const path = require('path');

//pm2配置文件
module.exports = {
    apps: [{
        name: 'deploy_node',
        script: 'server/index.js',
        cwd: './',
        instances: 2,
        watch: ['server'],
        env: {
            'NODE_ENV': 'development',
        },
        exec_mode: 'cluster',
        max_memory_restart: '2G',
        //日志地址
        error_file: `/data/logs/pm2/deploy_node_error.log`,
        out_file: `/data/logs/pm2/deploy_node_access.log`,
        log_date_format:'YYYY-MM-DD HH:mm:ss.SSSZ',
        listen_timeout: 8000,
        kill_timeout: 2000,
        restart_delay: 10000, //异常情况
        max_restarts: 10
    }]
};
