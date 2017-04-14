const express = require('express');
const app = express();
// token
const TOKEN = 'EAACvS7vIzdcBAI3qvn9CWoHHXauiB3iZBbDCIsaUf1igoiiT5ZBB8SnUGlZAApu2EyUIeZAFjIrToh38QdXz0sZBUmaB6HBsEZA6BWaPUvEaZCAFOewVuoJCRUwiZC7TeSiv08FDwdZANGKEaURcDs9HO9ZCUIaKxmzifZCCRRQFxoSagZDZD';


app.get('/', function(req, res) {
  res.send({ hello: 'world'});
});

app.get('/webhook', function(req, res) {

  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'MY_TOKEN') {
      console.log('validating webhook');

      res.status(200).send(req.query['hub.challenge']);
  } else {
    console.log('failed validation');
    res.sendStatus(403);
  }

});

app.post('/webhook', function (req, res) {
  console.log('chegouu');
  res.status(200).send('Olá tudo bem?');
});

function receivedMessage(event) {
  // Putting a stub for now, we'll expand it in the following steps
  console.log("Message data: ", event.message);
}

const port = 3000 || process.env.PORT;

app.listen(port, function(){
  console.log('server running');
});
