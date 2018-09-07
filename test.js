//js test 1
console.log('starting')

//loads in the "object" which connects to google trends
const googleTrends = require('google-trends-api')

//create an options object to sent as a request to the API
var options = {
    keyword: 'sharks',
    startTime: new Date('2017-02-01'),
    endTime: new Date('2017-02-06'),
    resolution: 'CITY',
  }

//TODO
//find the right method to use.
// look through the documentation and examples to find which method 
// to call (if we need something other than interest by region)
// and which options to set
// https://github.com/pat310/google-trends-api/blob/HEAD/examples.js
// https://www.npmjs.com/package/google-trends-api#examples
googleTrends.interestByRegion(options)
.then((res) => {
  console.log(res);
  //TODO add code here to parse (break apart) the returned info in a way that will print cleanly
})
.catch((err) => {
  console.log(err);
})
