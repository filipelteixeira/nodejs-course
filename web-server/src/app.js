const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// define paths for express configs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// set up handlebars directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// set up static directory to serve
app.use(express.static(publicDirectoryPath));


// set up endpoints

app.get('', (req, res) => {
    res.render("index", {
        title: 'Weather App',
        name: 'Filipe Teixeira'
    });
});

app.get('/help', (req, res) => {
    res.render("help", {
        title: 'Help',
        helpText: 'This is some text',
        name: 'Filipe Teixeira'
    });
});

app.get('/help/*', (req, res) => {
    res.render("404", {
        title: 'Weather App',
        text: 'The help article was not found',
        name: 'Filipe Teixeira'
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        title: 'About',
        name: 'Filipe Teixeira'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must provide an address"
        });
    }
    
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: error
            });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: error
                });
            }            
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            });
        })
    })


});

app.get('*', (req, res) => {
    res.render("404", {
        title: 'Weather App',
        text: 'The page was not found',
        name: 'Filipe Teixeira'
    });
});

app.listen(3000, () => {
    console.log("Server up at 3000");
});