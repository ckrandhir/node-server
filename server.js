/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-13 15:21:56 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-14 11:48:27
 */
// Dheeraj Changes

const express = require('express');

const fs = require('fs')
    //Chandan  conflict


var app = express();
//##################################################################################################################
//Attaching listner to the port

app.listen(3000, () => {

    console.log('Server start at 3000 port');

});
//##########################################################################################

//Sending response to browser

app.get('/error', (req, res) => {

    var e = {
        error: 'It Error'
    }
    res.send(e);

})

// app.get('/about', (req, res) => { //about
//      res.send('About page');

// });


//##################################################################################################################
//use for public directory page  to display html

app.use(express.static(__dirname + '/public'));

//##########################################################################################


//app.set('view engine', 'hbs'); // Seeting handle bar view



//##########################################################################################


app.get('/', (req, res) => { //Home---

    res.render('home.hbs', {
        page: 'Home page',
        //  currentDate: new Date().getFullYear()  Date value can be pass by Partial handle bar
    });
})

app.get('/about', (req, res) => { //about
    // res.send('About page');
    res.render('about.hbs', {
        page: 'About page',
        // currentDate: new Date().getFullYear()

    });
});

//##################################################################################################################


//---Rendering  partial .hbs file passing object

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials'); //Register folder for handle bar

hbs.registerHelper('getCurrentYear', () => {
        return new Date().getFullYear();
    }) //Helper


//##################################################################################################################

//Logging functionality

//Middle ware

app.use((req, res, next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);

    // fs.appendFile('server.log', log + '\n', (err) => {
    //     if (err) {
    //         console.log('unable to append server.log');

    //     }

    // }) 

    next();
})


//Showing maintaince file

// app.use((req, res, next) => {

//     res.render('maintenance.hbs');

// })