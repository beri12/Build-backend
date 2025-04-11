// The address of this  server connected to the network is:
// URL -> http://localhost:8000
//IP -> 127.0.0.1:8000
const express = require('express');
const app =  express()
const PORT = 8000

let data = {
    name: "beriso"
}


//HTTP VERBS(Methods) && Routes (or paths)
// The method informs the nature of request and the routes is further 
// subdirectory (basically we direct the request to the body of code respond appropirately, and these location or routes are called endpoints)

//  Type-1 Website endpoints (these endpoints are for sending back html and they typically 
    //  come when a user enters a url in a browser)
app.get('/', (req, res) => {
  res.send('<h1>homepage</h1>')

})

app.get('/dashboard', (req, res) => {

    res.send('<h1>dashboard</h1>');

});




// Type -2  API endpoints (non-visual)

app.get('/api/data', (req, res) => {
    console.log('This one was for data');
    res.send(data);
})



app.listen(PORT, () => console.log(`server has started on: ${PORT}`))