const mongoose = require('mongoose');

const ConnectDB = async(url)=>{
  await mongoose.connect(url);
}

module.exports = { ConnectDB,};