const { v4 } = require('uuid');
const AWS = require('aws-sdk');



const addTask = async (event)=> {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {title,description} = event.body;
    const createAdd = new Date();
    const id =v4();

    const newTask = {
        id,
        title,
        description,
        createAdd,
        done:false
    }

    await dynamodb.put({
        TableName:'TaskTable',
        Item:newTask
    }).promise();

    return {
        status:200,
        body:newTask
    }

};

module.exports = {
    addTask,
};