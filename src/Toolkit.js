// randomly generates a number between the range of low and high
function getRandom(low = 1, high = 10) {
    let randomNumber;
    // calculate random number
    randomNumber = Math.round(Math.random() * (high - low)) + low;
    // returning value
    return randomNumber;
}

function addKey(functionToCall, myCode = "Enter") {
    // wire up event listener
    document.addEventListener("keydown", (e) => {
        // is the key released the provided key? Check keyCode via Event object
        if (e.code === myCode) {
            // pressing the enter key will force some browsers to refresh
            // this command stops the event from going further
            e.preventDefault();
            // call provided callback to do everything else that needs to be done
            functionToCall();
            // this also helps the event from propagating in some browsers
            return false;
        }
    });
}

function getXMLData(retrieveScript, success, failure) {
    // send out AJAX request
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
        // has the response been received successfully?
        if (xhr.status == 200) {
            // data retrieved - call success method and pass along XML object response
            success(xhr.responseXML);
        } else {
            failure();
        }
    });
    xhr.addEventListener("error", (e) => {
        failure();
    });
    xhr.open("GET", retrieveScript, true);
    xhr.send();
}

function sendJSONData(sendScript, sendString, success, failure) {
    // send out AJAX request
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
        // has the response been received successfully?
        if (xhr.status == 200) {
            // data retrieved - call success method and pass along XML object response
            success(xhr.responseText);
        } else {
            failure();
        }
    });
    xhr.addEventListener("error", (e) => {
        failure();
    });
    xhr.open("POST", sendScript, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(sendString);
}

export {getRandom, addKey, getXMLData, sendJSONData};