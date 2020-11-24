const mongoose = require("mongoose");

const DATABASE_URL = "mongodb://azurewebappnodejs:eoFjSS8VF3uP6MmpUkeXwFjV82NVMyychl97YKgzIfUH5mqQxBGB8ZLTBCyl8gwevevzFH3QNidjDXZsH9AdKw%3D%3D@azurewebappnodejs.documents.azure.com:10255/?ssl=true"

const ConnectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = ConnectDatabase;


