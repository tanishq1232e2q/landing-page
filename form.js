const express = require("express")
app = express()

const path = require("path")
const { stringify } = require("querystring");



//connecting mongodb
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const formaschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
let aibot = mongoose.model("aibot",formaschema )

//adding css
let saticpath = path.join(__dirname, "public")
app.use(express.static(saticpath))
app.use(express.urlencoded())//isko lagana bahut jaruri h
app.use(express.json())
app.use(express.urlencoded({ extented: false }))



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"))
})
app.get("/users", (req, res) => {
    res.sendFile(path.join(__dirname, "users.html"))
})
app.get("/data", (req, res) => {
    res.sendFile(path.join(__dirname, "data.html"))
})
app.get("/app1", (req, res) => {
    res.sendFile(path.join(__dirname, "app1.html"))
})


app.get("/aibot", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))

})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"))

})




app.post("/aibot", (req, res) => {
    let name = req.body.name
    
    let email = req.body.email
    let password = req.body.password
    // console.log(password.length);


    if (name == "" || email == "" || password == "") {
        res.send("please complete the form")
    }
    else{
        let mydata = new aibot(req.body);
        console.log(mydata);
        mydata.save()
        res.sendFile(path.join(__dirname, "index.html"))

    }
})





//login concept

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const useremail = await aibot.findOne({ email: email })
        console.log(useremail);
        console.log(useremail.password);
        if (useremail.password == password) {
            res.sendFile(path.join(__dirname, "test.html"))

        }
        else {
            res.status(400).send("invalid details")
        }
    } catch (error) {
        res.status(400).send("invalid email")
    }

})

const contraschema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});
let contra = mongoose.model("contra",contraschema )

app.get("/contra", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))

})
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"))

})


app.post("/contra", (req, res) => {
    let fname = req.body.fname
    let lname = req.body.lname
    let username = req.body.username
    let city = req.body.city
    let state = req.body.state
    let contact = req.body.contact
    
    
    let mydata1 = new contra(req.body);
    console.log(mydata1);
    mydata1.save()
    res.sendFile(path.join(__dirname, "index.html"))


    
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server started on port ${PORT}`));

//payload means data of the body







