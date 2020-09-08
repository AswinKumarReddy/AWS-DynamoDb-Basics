'use strict'
const AWS = require('aws-sdk');

//Making sure we are oint to same location as DynamoDb table loaction
AWS.config.update ({region : 'ap-south-1'});

//Handler Functio
//Basically all the operations are done here
exports.handler = function (event, context, callback) {
    
    //Dynamo Db object for accessing dynamodb
    //api version is standard and can be use as it is every where
    const ddb = new AWS.DynamoDB({apiVesrsion : '2012-10-08'});

    //this a DynamoDB json syntax for params
    //here 'S' basicall means the type of id is a String
    //There is a way to skip this format and it is shown in other file
    const params = {
        TableName : "Users_parctice",
        Key :{
            id:{
                S:"29081999"
            }
        }        
    }

    //refer DynamoDB docs for function signature of "getItem" function
    ddb.getItem(params,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)

    })

}
