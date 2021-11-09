//Global Tables
var redTable = document.getElementById("redTable");
var greenTable = document.getElementById("greenTable");

function addRed() {
          
    var playerName = document.getElementById("playerName");
    var playerID = document.getElementById("playerID");

    // let URL_get = "http://localhost:8080/api/getPlayer/" + playerID.value;
    let URL_get = "https://sweteamalpha.herokuapp.com/api/getPlayer/" + playerID.value;    

    console.log(URL_get);

    fetchAsync(URL_get).then((data) => {
        console.log("Data ID: " + data.id);
        addRow(data.codeName,data.id,'red')
    })
    .catch((err) => {
        console.log("Error caught!!!");
        // document.getElementById("playerName").hidden = false;
        var codeName = prompt("Enter Code Name!!")
        // let URL_set = "http://localhost:8080/api/addPlayer/" + playerID.value + '/' + codeName
        let URL_set = "https://sweteamalpha.herokuapp.com/api/addPlayer/" + playerID.value + '/' + codeName
        const params = {
            id: playerID.value,
            firstName:	"",
            lastName:	"",
            codeName:	codeName
        };
        const options = {
            method: 'POST',
            body: JSON.stringify( params )  
        };
        fetch(URL_set, options )
            .then( response => response.json() )
            .then( response => {
                console.log("URL STUFF ADDED?")
        });

    });
 
}

function addGreen() {
          
    var playerName = document.getElementById("playerName");
    var playerID = document.getElementById("playerID");
 
    // let URL_get = "http://localhost:8080/api/getPlayer/" + playerID.value;
    let URL_get = "https://sweteamalpha.herokuapp.com/api/getPlayer/" + playerID.value;
    console.log(URL_get);

    fetchAsync(URL_get).then((data) => {
        console.log("Data ID: " + data.id);
        addRow(data.codeName,data.id,'green');
    })
    .catch((err) => {
        console.log("Error caught!!!");
        // document.getElementById("playerName").hidden = false;
        var codeName = prompt("Enter Code Name!!");
        // let URL_set = "http://localhost:8080/api/addPlayer/" + playerID.value + '/' + codeName;
        let URL_set = "https://sweteamalpha.herokuapp.com/api/addPlayer/" + playerID.value + '/' + codeName;
        const params = {
            id: playerID.value,
            firstName:	"",
            lastName:	"",
            codeName:	codeName
        };
        const options = {
            method: 'POST',
            body: JSON.stringify( params )  
        };
        fetch(URL_set, options )
            .then( response => response.json() )
            .then( response => {
                console.log("URL STUFF ADDED?")
        });
    });
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("redTable");
    table.deleteRow(index);
    
}

function deleteGreen(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("greenTable");
    table.deleteRow(index);
    
}
 

 
function load() {
    
    console.log("Page load finished");
 
}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function addRow(codename,id,color) {
    if(color == 'red') {
        var table = document.getElementById("redTable"); 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
    }
    else {
        var table = document.getElementById("greenTable"); 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteGreen(this)">';
    }
    row.insertCell(1).innerHTML= codename;
    row.insertCell(2).innerHTML= id;
}

//event listener for enter press
document.addEventListener("keydown", function(event) {
    console.log("Key Pressed");
    if (event.key === "Enter")
    {
        location.replace("sprint3_player_action_screen.html");
        event.preventDefault();
    }
});
