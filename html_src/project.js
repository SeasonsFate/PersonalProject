let generateRingCount = 0;
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

function optionListUpdate() {
    if (generateRingCount == 0) {
        let selector = document.getElementById("selectorring");
        data = JSON.parse(request.response);
        console.log(maxLength())
        console.log(data[0].type)

        //options.innerHTML="";
        for (let i = 0; i < data.length; i++) {
            if (data[i].type == 1) {
                console.log(i);
                let option = document.createElement("OPTION");
                console.log(data[i].name);
                option.innerHTML = data[i].name;
                selector.appendChild(option);
                generateRingCount++;
            }
        }
    } else {
        console.log("Already generated")
    }
}

function getGear() {
    let method = "GET";
    let url = "http://localhost:9000/item";
    let callback = optionListUpdate;
    let header = {
        "Content-Type": "application/json"
    }

    httpRequest(method, url, callback, header);
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

    httpRequest(method, url, callback, header);


    //httpRequest(method,url,)
    //return false;
}


function cloneobj() {
    // Create a clone of element with id ddl_1:
    let clone = document.getElementById("toclone").cloneNode(true);

    // Change the id attribute of the newly created element:
    clone.setAttribute('id', "cloned");

    // Append the newly created element on element p 
    document.getElementById("dest").appendChild(clone);
}


function maxLength() {
    for (let j = 1; j < data.length; j++) {
        let maximum = data[0].type
        if (data[j].type > data[j - 1].type) {
            maximum = data.type
        }
    }
    return
}
cloneobj();