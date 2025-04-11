// The address of this  server connected to the network is:
// URL -> http://localhost:8000
//IP -> 127.0.0.1:8000
const express = require('express');
const app =  express()
const PORT = 8000

let data = ['beriso']

// Middleware 
app.use(express.json())


//HTTP VERBS(Methods) && Routes (or paths)
// The method informs the nature of request and the routes is further 
// subdirectory (basically we direct the request to the body of code respond appropirately, and these location or routes are called endpoints)

//  Type-1 Website endpoints (these endpoints are for sending back html and they typically 
    //  come when a user enters a url in a browser)
app.get('/', (req, res) => {
    console.log('User requested the home page website')
  res.send(`
    <body
    style="background:pink;
    color: blue;">
    <h1>DATA:</h1>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log('This is my script')</script>
    `)
   

})

app.get('/dashboard', (req, res) => {

    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">home</a>
        </body>`);

});




// Type -2  API endpoints (non-visual)

// method-CRUD create-post read get update-put and delete delete

app.get('/api/data', (req, res) => {
    console.log('This one was for data');
    res.status(599).send(data);
})

app.post('/api/data', (req, res) => {
    // Someone wants to create a user ( for example when they cliock signupbutton)
    // the user clicks the sign up button after entering thier credentials, and
    // their browser is wired up to send  out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of array')
    res.sendStatus(203)
})



app.listen(PORT, () => console.log(`server has started on: ${PORT}`))