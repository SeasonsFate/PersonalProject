function httpRequest(method, url, callback, headers, body) {
    request = new XMLHttpRequest();
    request.open(method, url);

    for (let key in headers) {
        request.setRequestHeader(key, headers[key]);
    }

    request.onload = () => {
        callback(request);
    }

    body ? request.send(body) : request.send();
}

function optionListUpdate(request) {
    let data = JSON.parse(request.response);
    console.log(data)
    let options = document.getElementById("options");
    options.innerHTML="";
    for (let item of data){
        console.log(item)
        let option = document.createElement("option");
        option.innerText = item.name;
        options.appendChild(option) 
    }
}

function getGear() {
    let method = "GET";
    let url = "http://localhost:9000/item";
    let callback = optionListUpdate;
    let header = {
        "Content-Type": "application/json"
    }

    httpRequest(method, url, callback,header);
}

function saveBuild() {
    let method = "POST";
    let url = "http://localhost:9000/character";

    // var e = document.getElementById("RingSelector"); // logic for getting the value or innertext out of the dropdown form
    // var strUser = e.options[e.selectedIndex].text;
    // console.log(strUser);
    // console.log(e.options[e.selectedIndex].value);

    let callback = printy;
    let header = {
        "Content-Type": "application/json"
    }

    httpRequest(method,url,callback,header);


    //httpRequest(method,url,)
    //return false;
}

function handleForm(){

    //console.log(formelement);
    let gear = getGear();
    return false;
}



