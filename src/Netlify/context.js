function handler(event, context) {
    console.log(`\nHere is the context info:}`,process.env);
    return {
      statusCode: 200,
      body: JSON.stringify({
        ENV: process.env
      })
    };
  };
  
  module.exports = { handler };