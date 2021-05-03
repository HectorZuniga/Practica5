const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
const params = {
Key: {
"UserID": {
S: "123456789qwerty"
}
},
TableName: "compare-yourself"
};
dynamoDB.deleteItem(params, function(err, data) {
if (err){ callback(err); }
else { callback(null, data);}
});
};