const router = require('express').Router();

// Import the calculator service
const calcDivide = require('../services/calculatorservice.js');
const calcAdd = require('../services/calcaddservice.js');
const calcMinus = require('../services/calcminuservice.js');
const calcMultiply = require('../services/calcmultiplyservice.js');

// Handles add requests from the default index
router.get('/', (req, res) => {
    res.json({message: 'try calculator/add?a=5&b=7'});
});


// Handles Substract requests from the default index
router.get('/', (req, res) => {
    res.json({message: 'try calculator/minus?a=5&b=7'});
});

// Handles Substract requests from the default index
router.get('/', (req, res) => {
    res.json({message: 'try calculator/multiply?a=5&b=7'});
});

// Handles Substract requests from the default index
router.get('/', (req, res) => {
    res.json({message: 'try calculator/divide?a=5&b=7'});
});




// To handle requests for add

router.get('/add', (req, res) => {
    // define variables
    let numA;
    let numB;

    // Read parameters from the the querystring ... if the exist
    if(typeof req.query.a != 'undefined')
    numA = req.query.a;

    if(typeof req.query.b != 'undefined')
    numB = req.query.b;

    // Call the add function to perform addition
    const result = calcAdd.add(numA, numB);

    //Send a response
    res.json(result)
;})

// To handle requests for Substraction

router.get('/minus', (req, res) => {
    // define variables
    let numA;
    let numB;

    // Read parameters from the the querystring ... if the exist
    if(typeof req.query.a != 'undefined')
    numA = req.query.a;

    if(typeof req.query.b != 'undefined')
    numB = req.query.b;

    // Call the add function to perform addition
    const result = calcMinus.minus(numA, numB);

    //Send a response
    res.json(result)
;})

// To handle requests for multiply

router.get('/multiply', (req, res) => {
    // define variables
    let numA;
    let numB;

    // Read parameters from the the querystring ... if the exist
    if(typeof req.query.a != 'undefined')
    numA = req.query.a;

    if(typeof req.query.b != 'undefined')
    numB = req.query.b;

    // Call the add function to perform addition
    const result = calcMultiply.multiply(numA, numB);

    //Send a response
    res.json(result)
;})

// To handle requests for Division

router.get('/divide', (req, res) => {
    // define variables
    let numA;
    let numB;

    // Read parameters from the the querystring ... if the exist
    if(typeof req.query.a != 'undefined')
    numA = req.query.a;

    if(typeof req.query.b != 'undefined')
    numB = req.query.b;

    // Call the add function to perform addition
    const result = calcDivide.divide(numA, numB);

    //Send a response
    res.json(result)
;})

module.exports=router;