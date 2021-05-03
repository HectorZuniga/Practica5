
const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
        const params = {
    Item:{
    "UserID": {
    S: "user_" + Math.random()
    },
    "Age":{
    N: event.age,
    },
    "Height":{
    N: event.height,
    },
    "Income":{
    N: event.income,
    }
    },
    TableName: "compare-yourself"
    }
    dynamoDB.putItem(params, function(err, data) {
    if (err){
    console.log(err, err.stack); // an error occurred
    callback(err);
    }
    else {
    console.log(data); // successful response
    callback(null, data);
    }
    });
};