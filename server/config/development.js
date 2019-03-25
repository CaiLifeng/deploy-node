module.exports = {
    env:'development',
    dataBase:{
        username: 'root',
        password: '12345678',
        ip: 'localhost',
        port: 3306,
        db: 'futu_deploy',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    port:'3333',
};