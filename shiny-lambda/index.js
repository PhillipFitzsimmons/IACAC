exports.handler = async (event, context) => {
    let returnObject = {}
    returnObject.statusCode = 200
    var reply = {}
    var token;
    if (typeof event.body === 'string') {
        event.body=JSON.parse(event.body)
    }
    reply.shiny=event.httpMethod;
    returnObject.body = JSON.stringify(reply);
    returnObject.headers={
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,HEAD,GET,PUT,POST"
    }
    return returnObject
}
