function handler(event, context) {
    console.log(`\nHere is the context info:}`,event,context,process.env);
    return {
      statusCode: 200,
      body: JSON.stringify({
        CONTEXT: process.env.CONTEXT
      })
    };
  };
  
  module.exports = { handler };