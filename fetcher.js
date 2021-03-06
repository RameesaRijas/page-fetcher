const request = require('request');
const fs = require('fs')
const args = process.argv.splice(2);

request(args[0], (error, response, body) => {
  if (error) {
    console.log("Problem ", error.message);
    return
  }
  fs.access(args[1], function(error) {
    if (error) {
      console.log("Directory does not exist.")
      return
    } else {
    fs.writeFile(args[1], body, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
      let filesize = fs.statSync(args[1]).size;
      console.log(`Downloaded and saved ${filesize} bytes to ${args[1]}`)
    })
  }
});
});





