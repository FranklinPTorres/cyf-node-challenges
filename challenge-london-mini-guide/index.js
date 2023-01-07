const express = require ('express');
const cors = require ('cors');
const stratford = require('./data/Stratford.json')
const heathrow = require('./data/Heathrow.json')
const harrow = require('./data/Harrow.json')
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send(routes)
});

app.get("/pharmacies", (req, res) => {
  res.send(stratford.pharmacies);
});

app.get("/colleges", (req, res) => {
  res.send(stratford.colleges);
});

app.get("/doctors", (req, res) => {
  res.send(stratford.doctors);
});

app.get("/hospitals", (req, res) => {
  res.send(stratford.hospitals);
});

const routes = {
'/pharmacies': 'returns pharmacies list for stratford',
'/colleges': 'returns colleges list for stratford',  
'/doctors': 'returns doctors list for stratford',   
'/hospitals': 'returns hospitals list for stratford',  
};








const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening Port ${PORT}`);
});

