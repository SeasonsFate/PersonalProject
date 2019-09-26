//const types = ["Ring", "Earring", "Necklace"];
let clonedModal = 0;

const types2 = [
    { typeId: 1, name: 'Ring', elementRef: null },
    { typeId: 2, name: 'Earring', elementRef: null },
    { typeId: 3, name: 'Necklace', elementRef: null }
];

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

// function optionListUpdate() {
//     if (generateRingCount == 0) {
//         let selector = document.getElementById("selectorring");
//         data = JSON.parse(request.response);
//         for (let j = 1; j <= maxLength(data); j++) {
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].type == 1 && j == 1) {                 
//                     let option = document.createElement("OPTION");
//                     option.innerHTML = data[i].name;
//                     selector.appendChild(option);
//                     generateRingCount++;
//                 } else if (data[i].type == 2 && j == 2) {
//                     var newEl = document.getElementById("cloned" + (j - 1));
//                     var newSelector = newEl.getElementsByTagName("select")[0];
//                     var newOption = newEl.getElementsByTagName("option")[0];
//                     newOption.innerHTML = data[i].name;
//                     newSelector.appendChild(newOption);
//                 }
//             }
//         }
//     } else {
//     }
// }

function populateGearOptions(req) {
    const allGear = JSON.parse(req.response);

    for (let gear of allGear) {
        const typeObj = types2.find(val => gear.type == val.typeId);
        const selectEl = typeObj.elementRef.getElementsByTagName('select')[0];
        const gearOptionEl = document.createElement('option');
        gearOptionEl.value = gear.id;
        gearOptionEl.innerText = gear.name;

        selectEl.appendChild(gearOptionEl);
    }


}



function getGear() {
    let method = "GET";
    let url = "http://35.246.117.181:9000/item";
    let callback = populateGearOptions;
    let header = {
        "Content-Type": "application/json"
    };

    httpRequest(method, url, callback, header);

}


function cloneobj() {
    if (clonedModal == 0) {
        const toCloneEl = document.getElementById("toclone");
        for (let type of types2) {
            let clone = toCloneEl.cloneNode(true);
            type.elementRef = clone;
            clone.setAttribute('typeId', type.typeId);
            clone.setAttribute('id', `type_${type.typeId}`);
            //idChange = document.getElementById("selectorring");
            //idChange.setAttribute("id",type.name);
            clone.getElementsByTagName('label')[0].innerText = type.name;
            toCloneEl.parentElement.appendChild(clone);
        }
        toCloneEl.parentElement.removeChild(toCloneEl);


        // for (let j = 1; j < 3; j++) {
        //     // Create a clone of element with id ddl_1:
        //     let clone = document.getElementById("toclone").cloneNode(true);
        //     // Change the id attribute of the newly created element:
        //     clone.setAttribute('id', "cloned" + j);
        //     // Append the newly created element on element p 
        //     document.getElementById("dest").appendChild(clone);

        // }
        // if(!(clicked_id)){
        //     getGear();
        // }else{
        //     getGear(clicked_id)
        // }
        getGear();
        clonedModal++;
    } else {
        clonedModal++;
    }
}

function maxLength(data) {
    let maximum = data[0].type;
    for (let j = 1; j < data.length; j++) {
        if (data[j].type > data[j - 1].type) {
            maximum = data[j].type;
        }
    }
    return maximum;
}

function onSavePressed(form) {
    let body = {};

    // let usrvalue = [];
    // let e = document.getElementsByClassName("custom-select");
    // for(let i = 0; i < e.length; i++){

    //     usrvalue[i] = e[i].options[e[i].selectedIndex].value;
    //     body[types2[i].name.toLowerCase()] = usrvalue[i]
    // }

    let namedOptions = document.getElementsByClassName("custom-select");
    let i = 0;
    for (let option of namedOptions) {
        let selected = option.selectedIndex;
        usrvalue = option.options[selected].value;
        body[types2[i++].name.toLowerCase()] = usrvalue;
    }

    let buildnameinput = document.getElementById("buildnameinput").value;

    body["buildname"] = buildnameinput;

    let method = "POST";
    let url = "http://35.246.117.181:9000/character";

    let callback = (request) => { 
        console.log(request.response); 
    };
    let header = {
        "Content-Type": "application/json"
    };

    httpRequest(method, url, callback, header, JSON.stringify(body));
    //method, url, callback, headers, body
    window.location.href = "saved_builds.html";
    return false;
}



$("#gearModal").on("show.bs.modal", cloneobj);

