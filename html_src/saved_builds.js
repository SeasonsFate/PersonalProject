function populateTable(req){
    console.log(req)

    // location.reload();

    const allBuilds = JSON.parse(req.response);

    const columns = [
        'id', 'buildname'
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
        deleteButtonEl.setAttribute("id",build["id"])
        //deleteButtonEl.addEventListener('click',console.log(build["id"]));
        deleteButtonEl.setAttribute("onclick","deleteBuild(this.id)");
        //deletebuild(build["id"]);
        actionsCellEl.append(deleteButtonEl);
        const editButtonEl = document.createElement('button');
        editButtonEl.innerText = 'View';
        editButtonEl.type = 'button';
        editButtonEl.className = 'btn btn-success';
        editButtonEl.setAttribute("data-toggle","modal")
        editButtonEl.setAttribute("data-target","#gearModal")
        //deleteButtonEl.addEventListener('click',console.log(build["id"]));
        //editButtonEl.setAttribute("onclick",);
        //deletebuild(build["id"]);
        actionsCellEl.append(deleteButtonEl);
        actionsCellEl.append(editButtonEl);

        trEl.append(actionsCellEl);
        tBodyEl.append(trEl);
    }
    // debugger;
    
}

function deleteBuild(clicked_id){
    console.log(clicked_id);

    let method = "DELETE";
    let url = `http://localhost:9000/character/${clicked_id}`;
    let callback = console.warn("delete pressed for build id", clicked_id);
    let header = {
        "Content-Type": "application/json"
    }
    httpRequest(method,url,callback,header);

    location.reload();

}

function getBuilds(){

    let method = "GET";
    let url = "http://localhost:9000/character"

    let callback = populateTable;
    let header = {
        "Content-Type": "application/json"
    }
    httpRequest(method, url, callback, header);
}


function getOneBuild(clicked_id){

    let method = "GET";
    let url = "http://localhost:9000/character"

    let callback = populateTable;
    let header = {
        "Content-Type": "application/json"
    }
    httpRequest(method, url, callback, header);

}