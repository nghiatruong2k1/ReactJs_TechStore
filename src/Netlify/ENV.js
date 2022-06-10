function handler(event, context) {
    console.log(`\nHere is the context info:`,process.env);
    return {
      status: 200,
      body: process.env
    };
  };
  
  module.exports = { handler };