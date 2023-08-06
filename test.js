var axios = require("axios").default;

var options = {
  method: 'PUT',
  url: 'http://localhost:4000/api/atfal/64cc9266eca2e70af4063c4a/5000',
  headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});