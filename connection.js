
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require('./routers/user');
const subscriptionRoutes = require('./routers/suscription');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);        
app.use(subscriptionRoutes);

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
});

 