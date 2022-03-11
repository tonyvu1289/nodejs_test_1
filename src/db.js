const { Sequelize } = require('@sequelize/core');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('QLKhachSan', 'duy', '12345678', {
  host: 'localhost',
  dialect:'mysql'
});

let connect = async() =>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connect;