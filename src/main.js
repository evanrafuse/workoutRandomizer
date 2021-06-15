// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

// import the toolkit functions
import { getRandom } from "./Toolkit";

// DOM objects from page
// premade select page
let armsbtn;
let legsbtn;
let absbtn;
let backbtn;
let shouldersbtn;
let chestbtn;
let hipsbtn;
let fullbodybtn;
// workout page
let reversebtn;
let homebtn;
let workoutlist;
let exercisettl;
let exercisepic;
let timer;
let startbtn;
let pausebtn;
let stopbtn;
let prtxt;
let lastbtn;
let nextbtn;

// the xml of the premades
const RETRIEVE_SCRIPT = "./premade.xml"

// xmlHttpRequest object for carrying out AJAX
let xhr;
let xmlObject;

// the chosen premade workout
let workoutPreMade;

// the key to the XML sheet
let workoutPick;

// the workout text
let workouttxt;



// --------------------------------------------------private methods
function clickedPremade(e) {
    console.log("you clicked " + e.target.innerHTML);
    workoutPreMade = e.target.innerHTML;
    workoutPreMade = workoutPreMade.toLowerCase();
    workoutPreMade = workoutPreMade.replace(/ /g, "");
    console.log(workoutPreMade);
    document.querySelector(".premadeselectpage").style.display = "none";
    document.querySelector(".workoutpage").style.display = "flex";
    workoutPick = workoutPreMade.concat("1");
    workouttxt = xmlObject.getElementById(workoutPick).innerHTML;
    console.log(workouttxt);
    workouttxt = workouttxt.replace(/ &#xD;/g, "<br/>");
    workoutlist.innerHTML = workouttxt;
    console.log("Just for fun, here's a line break: <br>");
    // workoutlist.innerHTML = "1. <br/> 2. <br/> 3. <br/>";
}

function clickedReverse(e) {
    console.log("you clicked " + e.target.innerHTML);
    document.querySelector(".premadeselectpage").style.display = "flex";
    document.querySelector(".workoutpage").style.display = "none";
}

function clicked(e) {
    console.log("you clicked " + e.target.innerHTML);
}

function onLoaded(e) {
    if (xhr.status == 200) {
        // grab the XML response
        xmlObject = xhr.responseXML;
        // console.log(xhr.responseText);
    } else {
        onError();
    }
}

function onError(e) {
    console.log("*** Error has occured during AJAX data retrieval");
}
// --------------------------------------------------main method
function main() {
    // send out AJAX request
    xhr = new XMLHttpRequest();
    xhr.addEventListener("load", onLoaded);
    xhr.addEventListener("error", onError);
    xhr.open("GET", RETRIEVE_SCRIPT, true);
    xhr.send();

    // premade select page DOM
    armsbtn = document.querySelector(".armsbtn");
    legsbtn = document.querySelector(".legsbtn");
    absbtn = document.querySelector(".absbtn");
    backbtn = document.querySelector(".backbtn");
    shouldersbtn = document.querySelector(".shouldersbtn");
    chestbtn = document.querySelector(".chestbtn");
    hipsbtn = document.querySelector(".hipsbtn");
    fullbodybtn = document.querySelector(".fullbodybtn");
    // premade select page event listeners
    armsbtn.addEventListener("click",clickedPremade);
    legsbtn.addEventListener("click",clickedPremade);
    absbtn.addEventListener("click",clickedPremade);
    backbtn.addEventListener("click",clickedPremade);
    shouldersbtn.addEventListener("click",clickedPremade);
    chestbtn.addEventListener("click",clickedPremade);
    hipsbtn.addEventListener("click",clickedPremade);
    fullbodybtn.addEventListener("click",clickedPremade);
    
    // workout page DOM
    reversebtn = document.querySelector(".reversebtn");
    homebtn = document.querySelector(".homebtn");
    workoutlist = document.querySelector(".workoutlist");
    exercisettl = document.querySelector(".exercisettl");
    exercisepic = document.querySelector(".exercisepic");
    timer = document.querySelector(".timer");
    startbtn = document.querySelector(".startbtn");
    pausebtn = document.querySelector(".pausebtn");
    stopbtn = document.querySelector(".stopbtn");
    prtxt = document.querySelector(".prtxt");
    lastbtn = document.querySelector(".lastbtn");
    nextbtn = document.querySelector(".nextbtn");
    // workout page event listeners
    reversebtn.addEventListener("click",clickedReverse)
    homebtn.addEventListener("click",clicked)
    // workoutlist.addEventListener("click",clicked)
    // exercisettl.addEventListener("click",clicked)
    // exercisepic.addEventListener("click",clicked)
    // timer.addEventListener("click",clicked)
    startbtn.addEventListener("click",clicked)
    pausebtn.addEventListener("click",clicked)
    stopbtn.addEventListener("click",clicked)
    // prtxt.addEventListener("click",clicked)
    lastbtn.addEventListener("click",clicked)
    nextbtn.addEventListener("click",clicked)

    
}

main();