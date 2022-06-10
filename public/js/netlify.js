function handler(event, context) {
    console.log(`\nHere is the event info: ${JSON.stringify(event)}`);
    console.log(`\nHere is the context info: ${JSON.stringify(context)}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        CONTEXT: process.env.CONTEXT
      })
    };
  };
  
  module.exports = { handler };