import express from "express";
import bcrypt from "bcrypt";

// init server
const app = express();

//middlewares
app.use(express.static("public"));
app.use(express.json()) // enables from sharing

// routes
// home routes
app.get('/', (req,res) => {
    res.sendFile("index.html",{root:"public"})
})

//signup
app.get('/signup', (req,res) =>{
    res.sendFile("signup.html", {root:"public"})
})

app.post('/signup', (req,res) => {
    const { name, email, password, number, tac} = req.body

    //form validation
    if (name.length < 3) {
        res.json({'alert': 'Name must be at least 3 letters long'})
    } else if (!email.length){
        res.json({ 'alert': 'Enter your email'});
    } else if ( password.length < 8){
        res.json({'alert': 'Password must be at least 8 characters long'});
    } else if (Number(number)||number.length < 10){
        res.json({'alert': 'Invalid number, please enter a valid one'});
    } else if (!tac.checked){
        res.json({'alert': 'You must agree to our terms and conditions'});
    } else {
        //store the data in db
    }
})

//404 route
app.get('/404', (req, res) =>{
    res.sendFile("404.html", {root:"public"})
}) 

app.use((req,res) =>{
    res.redirect('/404')
})

app.listen (3000, () =>{
console.log('listening on port 3000');
})