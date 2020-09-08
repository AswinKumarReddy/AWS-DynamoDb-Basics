'use strict'
const AWS = require('aws-sdk');

AWS.config.update ({region : 'ap-south-1'});


exports.handler = async (event, context)=> {
    const ddb = new AWS.DynamoDB({apiVesrsion : '2012-10-08'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region : 'ap-south-1'});

    const params = {
        TableName : "Users_parctice",
        Key :{
            id:"12345"
        }        
    }

    //Instead of using callback function to print to console we use try/catch block with await and .promise() to execute the code
    //and catch if it throws an error.
    try{
        const data = await documentClient.get(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    

}
