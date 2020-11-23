const mongoose = require("mongoose");

//   //mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
//   mongoose.connect("mongodb://azurewebappnodejs:eoFjSS8VF3uP6MmpUkeXwFjV82NVMyychl97YKgzIfUH5mqQxBGB8ZLTBCyl8gwevevzFH3QNidjDXZsH9AdKw==@azurewebappmeanjs.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false", { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{


mongoose.connect("mongodb://azurewebappnodejs:eoFjSS8VF3uP6MmpUkeXwFjV82NVMyychl97YKgzIfUH5mqQxBGB8ZLTBCyl8gwevevzFH3QNidjDXZsH9AdKw%3D%3D@azurewebappnodejs.documents.azure.com:10255/?ssl=true", { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{

  if(!error)
   {
     console.log("Success Connected");
   }
   else
   {
     console.log("Error connecting to database.")
   }
 });

const Course = require("./course.model");


// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://azurewebappnodejs:eoFjSS8VF3uP6MmpUkeXwFjV82NVMyychl97YKgzIfUH5mqQxBGB8ZLTBCyl8gwevevzFH3QNidjDXZsH9AdKw%3D%3D@azurewebappnodejs.documents.azure.com:10255/?ssl=true", function (err, client) {
//   client.close();
// });

// module.exports = {
//   db: {
//     uri: 'mongodb://azurewebappnodejs:eoFjSS8VF3uP6MmpUkeXwFjV82NVMyychl97YKgzIfUH5mqQxBGB8ZLTBCyl8gwevevzFH3QNidjDXZsH9AdKw==@azurewebappmeanjs.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false'
//   }
// };