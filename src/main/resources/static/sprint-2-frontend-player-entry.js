function addRed() {
          
    var playerName = document.getElementById("playerName");
    var playerID = document.getElementById("playerID");
    var table = document.getElementById("redTable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    // let URL = "http://localhost:8080/api/getPlayer/" + playerID.value;
    let URL = "https://sweteamalpha.herokuapp.com/api/getPlayer/" + playerID.value;

    console.log(URL);

    fetchAsync(URL).then((data) => {
        console.log("Data ID: " + data.id);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
        row.insertCell(1).innerHTML= data.codeName;
        row.insertCell(2).innerHTML= data.id;
    });



 
}

function addGreen() {
          
    var playerName = document.getElementById("playerName");
    var playerID = document.getElementById("playerID");
    var table = document.getElementById("greenTable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    // let URL = "http://localhost:8080/api/getPlayer/" + playerID.value;
    let URL = "https://sweteamalpha.herokuapp.com/api/getPlayer/" + playerID.value;
    console.log(URL);

    fetchAsync(URL).then((data) => {
        console.log("Data ID: " + data.id);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteGreen(this)">';
        row.insertCell(1).innerHTML= data.codeName;
        row.insertCell(2).innerHTML= data.id;
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
