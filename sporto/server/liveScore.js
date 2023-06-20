const { default: axios } = require("axios");
const express = require("express");
const urls = require("./urls.js");

let cricData = [
  {
    id: "e59e6ea2-7bdb-46f9-a839-cefa6c92d9e7",
    name: "Lancashire vs Somerset, County Div 1",
    status: "Day 3: Stumps - Somerset lead by 149 runs",
    venue: "Emirates Old Trafford, Manchester",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Lancashire", "Somerset"],
    teamInfo: [
      {
        name: "Lancashire",
        shortname: "LNCS",
        img: "https://g.cricapi.com/iapi/1125-637885551497331567.webp?w=48",
      },
      {
        name: "Somerset",
        shortname: "SOM",
        img: "https://g.cricapi.com/iapi/1131-637885552070524344.webp?w=48",
      },
    ],
    score: [
      {
        r: 361,
        w: 10,
        o: 120,
        inning: "Somerset Inning 1",
      },
      {
        r: 326,
        w: 10,
        o: 101,
        inning: "Lancashire Inning 1",
      },
      {
        r: 114,
        w: 3,
        o: 28.2,
        inning: "Somerset Inning 2",
      },
    ],
    series_id: "a02fe535-9179-4d64-970b-c00014482057",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "1d6a1073-bee1-4058-8218-bbecfeb1b7f8",
    name: "Kent vs Hampshire, County Div 1",
    status: "Day 3: Stumps - Kent trail by 212 runs",
    venue: "St Lawrence Ground, Canterbury",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Kent", "Hampshire"],
    teamInfo: [
      {
        name: "Hampshire",
        shortname: "HAM",
        img: "https://g.cricapi.com/iapi/1122-637885550993657486.webp?w=48",
      },
      {
        name: "Kent",
        shortname: "KENT",
        img: "https://g.cricapi.com/iapi/1124-637885551212175895.webp?w=48",
      },
    ],
    score: [
      {
        r: 95,
        w: 10,
        o: 37.4,
        inning: "Kent Inning 1",
      },
      {
        r: 373,
        w: 10,
        o: 104.5,
        inning: "Hampshire Inning 1",
      },
      {
        r: 66,
        w: 0,
        o: 26,
        inning: "Kent Inning 2",
      },
    ],
    series_id: "a02fe535-9179-4d64-970b-c00014482057",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "249f169c-fb07-4c9c-9db4-f329df2455db",
    name: "Northamptonshire vs Nottinghamshire, County Div 1",
    status: "Nottinghamshire won by an innings and 25 runs",
    venue: "County Ground, Northampton",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Northamptonshire", "Nottinghamshire"],
    teamInfo: [
      {
        name: "Northamptonshire",
        shortname: "NOR",
        img: "https://g.cricapi.com/iapi/1129-637885551856435418.webp?w=48",
      },
      {
        name: "Nottinghamshire",
        shortname: "NOT",
        img: "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48",
      },
    ],
    score: [
      {
        r: 158,
        w: 10,
        o: 65.1,
        inning: "Northamptonshire Inning 1",
      },
      {
        r: 255,
        w: 10,
        o: 74.3,
        inning: "Nottinghamshire Inning 1",
      },
      {
        r: 72,
        w: 10,
        o: 30.1,
        inning: "Northamptonshire Inning 2",
      },
    ],
    series_id: "a02fe535-9179-4d64-970b-c00014482057",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: true,
  },
  {
    id: "efef3b80-09d3-413d-b279-4a0a4ddb349b",
    name: "Surrey vs Middlesex, County Div 1",
    status: "Day 3: Stumps - Middlesex trail by 43 runs",
    venue: "Kennington Oval, London",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Surrey", "Middlesex"],
    teamInfo: [
      {
        name: "Middlesex",
        shortname: "MDX",
        img: "https://g.cricapi.com/iapi/1127-637889091340507643.webp?w=48",
      },
      {
        name: "Surrey",
        shortname: "SUR",
        img: "https://g.cricapi.com/iapi/1133-637885552361099530.webp?w=48",
      },
    ],
    score: [
      {
        r: 209,
        w: 10,
        o: 66.5,
        inning: "Middlesex Inning 1",
      },
      {
        r: 380,
        w: 10,
        o: 99.4,
        inning: "Surrey Inning 1",
      },
      {
        r: 128,
        w: 3,
        o: 41,
        inning: "Middlesex Inning 2",
      },
    ],
    series_id: "a02fe535-9179-4d64-970b-c00014482057",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "b340a05d-1f95-4c21-9248-b99995ad62a6",
    name: "Leicestershire vs Sussex, County Div 2",
    status: "Day 3: Stumps - Leicestershire trail by 144 runs",
    venue: "Grace Road, Leicester",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Leicestershire", "Sussex"],
    teamInfo: [
      {
        name: "Leicestershire",
        shortname: "LECS",
        img: "https://g.cricapi.com/iapi/1126-637889090878436462.webp?w=48",
      },
      {
        name: "Sussex",
        shortname: "SUSS",
        img: "https://g.cricapi.com/iapi/1134-637889091814592518.webp?w=48",
      },
    ],
    score: [
      {
        r: 430,
        w: 10,
        o: 118.3,
        inning: "Sussex Inning 1",
      },
      {
        r: 270,
        w: 10,
        o: 66,
        inning: "Leicestershire Inning 1",
      },
      {
        r: 16,
        w: 0,
        o: 6,
        inning: "Sussex Inning 2",
      },
    ],
    series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "808b0394-acf0-45c8-b7aa-b58c65314313",
    name: "Derbyshire vs Gloucestershire, County Div 2",
    status: "Day 3: Stumps - Gloucestershire trail by 56 runs",
    venue: "County Ground, Derby",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Derbyshire", "Gloucestershire"],
    teamInfo: [
      {
        name: "Derbyshire",
        shortname: "DERB",
        img: "https://g.cricapi.com/iapi/1117-637889091569915358.webp?w=48",
      },
      {
        name: "Gloucestershire",
        shortname: "GLOU",
        img: "https://g.cricapi.com/iapi/1121-637885550747990018.webp?w=48",
      },
    ],
    score: [
      {
        r: 251,
        w: 9,
        o: 83.4,
        inning: "Derbyshire Inning 1",
      },
      {
        r: 195,
        w: 5,
        o: 61,
        inning: "Gloucestershire Inning 1",
      },
    ],
    series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "0715c22c-4484-43b7-9ff0-72b6ce1a0bdd",
    name: "Durham vs Yorkshire, County Div 2",
    status: "Day 3: Stumps - Durham need 33 runs",
    venue: "Riverside Ground, Chester-le-Street",
    date: "2023-05-11",
    dateTimeGMT: "2023-05-11T10:00:00",
    teams: ["Durham", "Yorkshire"],
    teamInfo: [
      {
        name: "Durham",
        shortname: "DURH",
        img: "https://g.cricapi.com/iapi/1118-637889090599643548.webp?w=48",
      },
      {
        name: "Yorkshire",
        shortname: "YRK",
        img: "https://g.cricapi.com/iapi/1139-637885552795894277.webp?w=48",
      },
    ],
    score: [
      {
        r: 254,
        w: 10,
        o: 80.3,
        inning: "Yorkshire Inning 1",
      },
      {
        r: 227,
        w: 10,
        o: 64.5,
        inning: "Durham Inning 1",
      },
      {
        r: 218,
        w: 10,
        o: 67,
        inning: "Yorkshire Inning 2",
      },
      {
        r: 213,
        w: 8,
        o: 70,
        inning: "Durham Inning 2",
      },
    ],
    series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
    fantasyEnabled: true,
    bbbEnabled: false,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "5b270d56-89ea-4e48-a41b-ce85f9727650",
    name: "Ireland vs Bangladesh, 1st ODI",
    matchType: "odi",
    status: "No result (due to rain)",
    venue: "County Ground, Chelmsford",
    date: "2023-05-09",
    dateTimeGMT: "2023-05-09T09:45:00",
    teams: ["Ireland", "Bangladesh"],
    teamInfo: [
      {
        name: "Bangladesh",
        shortname: "BAN",
        img: "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48",
      },
      {
        name: "Ireland",
        shortname: "IRE",
        img: "https://g.cricapi.com/iapi/33-637926315578500224.png?w=48",
      },
    ],
    score: [
      {
        r: 246,
        w: 9,
        o: 50,
        inning: "Bangladesh Inning 1",
      },
      {
        r: 65,
        w: 3,
        o: 16.3,
        inning: "Ireland Inning 1",
      },
    ],
    series_id: "5bf9e811-8a06-446e-8b23-eb17dfb5c071",
    fantasyEnabled: true,
    bbbEnabled: true,
    hasSquad: true,
    matchStarted: true,
    matchEnded: false,
  },
  {
    id: "b5df4a10-5ec6-4ae1-aa4f-812730191195",
    name: "Delhi Capitals vs Punjab Kings, 59th Match",
    matchType: "t20",
    status: "Punjab Kings won by 31 runs",
    venue: "Arun Jaitley Stadium, Delhi",
    date: "2023-05-13",
    dateTimeGMT: "2023-05-13T14:00:00",
    teams: ["Delhi Capitals", "Punjab Kings"],
    teamInfo: [
      {
        name: "Delhi Capitals",
        shortname: "DC",
        img: "https://g.cricapi.com/iapi/148-637874596301457910.png?w=48",
      },
      {
        name: "Punjab Kings",
        shortname: "PBKS",
        img: "https://g.cricapi.com/iapi/247-637852956959778791.png?w=48",
      },
    ],
    score: [
      {
        r: 167,
        w: 7,
        o: 20,
        inning: "Punjab Kings Inning 1",
      },
      {
        r: 136,
        w: 8,
        o: 20,
        inning: "Delhi Capitals Inning 1",
      },
    ],
    series_id: "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e",
    fantasyEnabled: true,
    bbbEnabled: true,
    hasSquad: true,
    matchStarted: true,
    matchEnded: true,
  },
  {
    id: "d96cb055-6050-44b5-88e0-d52eb0314dce",
    name: "Sunrisers Hyderabad vs Lucknow Super Giants, 58th Match",
    matchType: "t20",
    status: "Lucknow Super Giants won by 7 wkts",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    date: "2023-05-13",
    dateTimeGMT: "2023-05-13T10:00:00",
    teams: ["Sunrisers Hyderabad", "Lucknow Super Giants"],
    teamInfo: [
      {
        name: "Lucknow Super Giants",
        shortname: "LSG",
        img: "https://g.cricapi.com/iapi/215-637876059669009476.png?w=48",
      },
      {
        name: "Sunrisers Hyderabad",
        shortname: "SRH",
        img: "https://g.cricapi.com/iapi/279-637852957609490368.png?w=48",
      },
    ],
    score: [
      {
        r: 182,
        w: 6,
        o: 20,
        inning: "Sunrisers Hyderabad Inning 1",
      },
      {
        r: 185,
        w: 3,
        o: 19.2,
        inning: "Lucknow Super Giants Inning 1",
      },
    ],
    series_id: "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e",
    fantasyEnabled: true,
    bbbEnabled: true,
    hasSquad: true,
    matchStarted: true,
    matchEnded: true,
  },
];

require("dotenv").config({ path: require("find-config")(".env") });

const route = express.Router();

route.get("/:sport", async (req, res) => {

  if (req.params.sport === "cricket") {
    let dat = await axios.get(urls.cricket);
    console.log(dat)
    res.send(cricData).end();
  }else{
    res.send('lol')
  }
});

module.exports = route;
