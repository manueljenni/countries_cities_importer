const express = require("express");
const cities = require('cities.json');
const countriesList = require('countries-list');

const app = express();
const port = 9999;

app.get("/getCities", async (req, res) => {
    res.status(200).send(cities);
});

app.get("/getCountries", async (req, res) => {
    res.status(200).send(countriesList.countries);
});

// Run app
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});