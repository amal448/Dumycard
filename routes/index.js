var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
let players=[
  {
    name:"Aoron Ramsdale ",
    posetion:"Goalkeeper ",
    Nationality:"England ",
    img:"https://resources.premierleague.com/premierleague/photos/players/110x140/p225321.png "
  },
  {
    name:"Kieran Tierney",
    posetion:"Defender",
    Nationality:"Scotland",
    img:"https://resources.premierleague.com/premierleague/photos/players/110x140/p192895.png"
  },
  {
    name:"Rob Holding",
    posetion:"Defender ",
    Nationality:"England ",
    img:"https://resources.premierleague.com/premierleague/photos/players/110x140/p156074.png"
  },
  {
    name:"William Saliba ",
    posetion:"Defender ",
    Nationality:"England",
    img:"https://resources.premierleague.com/premierleague/photos/players/110x140/p462424.png "
  }
]

let list=[
  {
    name:'Zach Abbout',
  },
  {
    name:'Tery Ablade',
  },
  {
    name:'Tammy Abraham',
  },
  {
    name:'Tylers Adams',
  },
  {
    name:'Tosin Adarabioyo',
  },
  {
    name:'Tayo Adaramola',
  },
  {
    name:'Joshua Addae',
  },
  {
    name:'Simon Adingra',
  },
  {
    name:'Adrian',
  },
  {
    name:'Nayef Aguerd',
  },
  
]

let table=[
  { 
    number:"1",
    name:"Brenden-Aaronson",
    posetion:"Midfielder",
    Nationality:"United States"
  },
  {
    number:"2",
    name:"Zach-Abbott",
    posetion:"Defender",
    Nationality:"England"
  },
  { 
    number:"3",
    name:"Terry Ablade",
    posetion:"Forward",
    Nationality:"Finland"
  },
  { number:"4",
    name:"Tammy Abraham",
    posetion:"Forward",
    Nationality:"England"
  },
  { 
    number:"5",
    name:"Adam Armstrong",
    posetion:"Forward",
    Nationality:"England"
  },
  { 
    number:"6",
    name:"Tyler Adams",
    posetion:"Midfielder",
    Nationality:"United States"
  },
  { 
    number:"7",
    name:"Tosin Adarabioyo",
    posetion:"Defender",
    Nationality:"England"
  },
  { 
    number:"8",
    name:"Tayo Adaramolat",
    posetion:"Defender",
    Nationality:"Ireland"
  },
  { 
    number:"9",
    name:"Joshua Addae",
    posetion:"Defender",
    Nationality:"England"
  },
  { 
    number:"10",
    name:"Brenden-Aaronson",
    posetion:"Midfielder",
    Nationality:"United States"
  }
]


  res.render('index', {players,list,table});
});

module.exports = router;
