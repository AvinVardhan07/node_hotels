const path = require('path');
const express = require('express');
//const express = require('static')

const app = express();
const PathDic = path.join('C:', 'Users', 'Dell', 'Videos', 'Screenshots');

app.use(express.static(PathDic)); // Serve static files from this directory

app.listen(3000, () => {
    console.log("Server running on port 3000"); 
});

app.use('/' , () =>{
    console.log("This is the home page route");     
})