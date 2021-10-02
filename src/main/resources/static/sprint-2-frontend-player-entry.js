
function addRow() {
          
    var myName = document.getElementById("name");
    var playerID = document.getElementById("playerID");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    let str = "http://localhost:8080/api/getPlayer/" + playerID.value;
    console.log(str);

    fetchAsync(str).then((data) => {
        console.log("Data ID: " + data.id);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
        row.insertCell(1).innerHTML= data.codename;
        row.insertCell(2).innerHTML= data.id;
    });



 
}

function addGreen() {
          
    var myName = document.getElementById("name");
    var playerID = document.getElementById("playerID");
    var table = document.getElementById("myTableDataGreen");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    let str = "http://localhost:8080/api/getPlayer/" + playerID.value;
    console.log(str);

    fetchAsync(str).then((data) => {
        console.log("Data ID: " + data.id);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
        row.insertCell(1).innerHTML= data.codename;
        row.insertCell(2).innerHTML= data.id;
    });
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}

function deleteRowGreen(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableDataGreen");
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
