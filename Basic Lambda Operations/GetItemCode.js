'use strict'
const AWS = require('aws-sdk');

AWS.config.update ({region : 'ap-south-1'});


exports.handler = function (event, context, callback) {
    const ddb = new AWS.DynamoDB({apiVesrsion : '2012-10-08'});

    const params = {
        TableName : "Users_parctice",
        Key :{
            id:{
                s:"29081999"
            }
        }        
    }

    ddb.getItem(params,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)

    })

}
