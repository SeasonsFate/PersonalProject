function populateTable(req){
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
        deleteButtonEl.className = 'btn btn-danger';
        deleteButtonEl.addEventListener('click', () => console.warn('Delete clicked for ', build));
        actionsCellEl.append(deleteButtonEl);
        
        trEl.append(actionsCellEl);
        tBodyEl.append(trEl);
    }
    // debugger;
    
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

