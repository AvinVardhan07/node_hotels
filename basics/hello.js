const path = require('path');
const express = require('express');

const app = express();
const PathDic = path.join('C:', 'Users', 'Dell', 'Videos', 'Screenshots');

app.use(express.static(PathDic));

app.get('/wanted', (req, res) => {
    res.send({
        Name: "Avin",
        Profession: "Hacker", // Corrected spelling
        Age: 20
    });
});

app.listen(3000, () => {
    console.log("Fknnn Beast!");
});
