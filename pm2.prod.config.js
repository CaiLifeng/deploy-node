'use strict';
/* global process , __dirname*/
const path = require('path');

//pm2配置文件
module.exports = {
    apps: [{
        name: 'deploy_node',
        script:'server/index.js',
        cwd: './',
        instances: 4,
        watch: false,
        env: {
            'NODE_ENV': 'production'
        },
        exec_mode: 'cluster',
        max_memory_restart: '2G',
        //日志地址
        error_file: `/data/var/nodejs/log/deploy_node_error.log`,
        out_file: `/data/var/nodejs/log/deploy_node_access.log`,
        log_date_format:'YYYY-MM-DD HH:mm:ss.SSSZ',
        listen_timeout: 10000,
        kill_timeout: 10000,
        restart_delay: 20000, //异常情况
        max_restarts: 10
    }]
};
