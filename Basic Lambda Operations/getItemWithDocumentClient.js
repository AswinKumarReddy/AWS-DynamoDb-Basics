'use strict'
const AWS = require('aws-sdk');

AWS.config.update ({region : 'ap-south-1'});


exports.handler = function (event, context, callback) {
    const ddb = new AWS.DynamoDB({apiVesrsion : '2012-10-08'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region : 'ap-south-1'});

    //Notice that we are not specifying type of id in a seperate object
    //now we are using the documentClien object instead of dbb obj for getting the item 
    const params = {
        TableName : "Users_parctice",
        Key :{
            id:"12345"
        }        
    }

    ddb.get(params,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)

    })

}
