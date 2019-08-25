const http = require('http');
setInterval(loadtest, 100); //time is in ms
function loadtest()
{
http.get('http://week5-323303387.us-east-1.elb.amazonaws.com:3000', (res) => {
res.on('data', function (chunk) {
console.log('' + chunk);
});
});
}

//http://localhost:3000
//http://ec2-3-87-22-14.compute-1.amazonaws.com:3000
//week5-323303387.us-east-1.elb.amazonaws.com