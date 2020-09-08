'use strict'
const AWS = require('aws-sdk');

AWS.config.update ({region : 'ap-south-1'});

//This lambda code is very much similar to get Item code with very small changes
exports.handler = async (event, context)=> {
    const ddb = new AWS.DynamoDB({apiVesrsion : '2012-10-08'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region : 'ap-south-1'});

    //Here instead of 'Key' we us 'Item' for the name of map and we fill up all the fields we wand add
    const params = {
        TableName : "Users_parctice",
        Item :{
            id:"12345",
            firstname : "Suraj",
            lastname : "Suresh"
        }        
    }

    //we use put in place of get
    try{
        const data = await documentClient.put(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    

}
