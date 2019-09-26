function populateTable(req){

    const allBuilds = JSON.parse(req.response);

    const columns = [
        'id', 'buildname', "earring", "necklace", "ring"
    ];

    const tBodyEl = document.getElementById('appendbelow');

    for (let build of allBuilds){
        const trEl = document.createElement('tr');

        for(let column of columns) {
            const cellEl = document.createElement('td');
            cellEl.innerText = build[column];
            trEl.append(cellEl);
        }

        // Create actions cell
        const actionsCellEl = document.createElement('td');
        // Create delete action button
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.innerText = 'Delete';
        deleteButtonEl.type = 'button';
        deleteButtonEl.className = 'btn btn-danger';
        deleteButtonEl.setAttribute("id",build["id"]);
        //deleteButtonEl.addEventListener('click',console.log(build["id"]));
        deleteButtonEl.setAttribute("onclick","deleteBuild(this.id)");
        //deletebuild(build["id"]);
        actionsCellEl.append(deleteButtonEl);
        const editButtonEl = document.createElement('button');
        editButtonEl.innerText = 'View';
        editButtonEl.type = 'button';
        editButtonEl.className = 'btn btn-success';
        editButtonEl.setAttribute("data-toggle","modal");
        editButtonEl.setAttribute("data-target","#gearModal");
        editButtonEl.setAttribute("id",build["id"]);

        editButtonEl.setAttribute("name",build["buildname"]);

        editButtonEl.setAttribute("onclick","updateField(this.id,this.name)");

        actionsCellEl.append(deleteButtonEl);
        actionsCellEl.append(editButtonEl);

        trEl.append(actionsCellEl);
        tBodyEl.append(trEl);
        
    }
    // debugger;
    
}

function deleteBuild(clickedId){
    let method = "DELETE";
    let url = `http://35.246.117.181:9000/character/${clickedId}`;
    let callback = console.warn("delete pressed for build id", clickedId);
    let header = {
        "Content-Type": "application/json"
    };
    httpRequest(method,url,callback,header);

    location.reload();

}

function getBuilds(){
    let method = "GET";
    let url = "http://35.246.117.181:9000/character";

    let callback = populateTable;
    let header = {
        "Content-Type": "application/json"
    };
    httpRequest(method, url, callback, header);
}


function updateGear(){

    let id = document.getElementById("buildId").value;
    let buildnameinput = document.getElementById("buildName").value;
    let body = {};
    let namedOptions = document.getElementsByClassName("custom-select");
    let i = 0;
    for (let option of namedOptions) {
        let selected = option.selectedIndex;
        usrvalue = option.options[selected].value;
        body[types2[i++].name.toLowerCase()] = usrvalue;
    }

    body["buildname"] = buildnameinput;

    let method = "PUT";
    let url = `http://35.246.117.181:9000/character/${id}`;

    let callback = () => {
        console.log(request.response);
    };
    let header = {
        "Content-Type": "application/json"
    };
    httpRequest(method, url, callback, header, JSON.stringify(body));
    location.reload();
    return false;
 }

function updateField(clickedId,clickedName){
    let buildId = document.getElementById("buildId");
    buildId.setAttribute("value",clickedId);
    let buildName = document.getElementById("buildName");
    buildName.setAttribute("value",clickedName);
}