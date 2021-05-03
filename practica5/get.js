const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
const type = event.type;
if(type === 'all'){
const params = { TableName: "compare-yourself" }
dynamoDB.scan(params, function(err, data) {
if (err){
console.log(err, err.stack); // an error occurred
callback(err);
}
else {
console.log(data); // successful response
const items = data.Items.map(
(dataField) => { return {age: +dataField.Age.N, height: +dataField.Height.N, income: +dataField.Income.N} } );
callback(null, items);
}
});
} else if (type === 'single'){
const params = {
Key: {
"UserID": {
S: "123456789qwerty"
}
},
TableName: "compare-yourself"
};
dynamoDB.getItem(params, function(err, data) {
if (err){ callback(err); }
else { callback(null, {age : +data.Item.Age.N, height : +data.Item.Height.N, income : +data.Item.Income.N});}
});
} else { callback(null, 'Something went wrong!'); }
};
