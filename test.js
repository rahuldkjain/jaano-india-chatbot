// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: 'd3a44bff-a1ed-43e2-82fd-b1cb49840b20', // replace with service username
  password: '2C5IrTSeTxlI', // replace with service password
  version: '2018-02-16'
});

var workspace_id = '5c7a0384-503c-4fe9-8707-0e60b3f98478'; // replace with workspace ID

// Start conversation with empty message.
service.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  
	 //processing intents
	  if(response.intents.length>0)
		console.log("#" + response.intents[0].intent);
	  
	  //processing entities
	  if(response.entities.length>0)
		  console.log("@"+response.entities[0].entity);
	  
	  // Display the output from dialog, if any.
	  if (response.output.text.length != 0) {
		  console.log(response.output.text[0]);
	  }
	  
  if(response.intents.length>0&&response.intents[0].intent=="bye")
  {
	  
  }
  else
  {	  
	  //prompt user for new message
	  var newMessageFromUser = prompt('>> ');
	  service.message({ workspace_id: workspace_id, input: { text: newMessageFromUser },context:response.context,}, processResponse)
  }
}