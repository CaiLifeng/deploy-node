module.exports = {
    env:'production',
    dataBase:{
        username: 'echo',
        password: 'echo1234@123',
        ip: '172.28.249.30',
        port: 13357,
        db: 'web_account',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    port:'3333',
};