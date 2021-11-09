let playerArray = [];
playerArray = JSON.parse(sessionStorage.getItem("playerArray"));
let color = '';
let codeName = '';
let id = '';

let arrNum = 0;

for(let i = 0; i < playerArray.length; i++)
{
    console.log(playerArray[i]);
    arrNum = playerArray.length/3;
}

console.log(arrNum);

for(let i = 0; i < arrNum; i++)
{
    color = playerArray[2];
    codeName = playerArray[0];
    id = playerArray[1];
    if(color == 'red') {
        var table = document.getElementById("redTable"); 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
    }
    else {
        var table = document.getElementById("greenTable"); 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
    }
    row.insertCell(0).innerHTML= codeName;
    row.insertCell(1).innerHTML= id;
    row.insertCell(2).innerHTML= '0';
    playerArray.shift();
    playerArray.shift();
    playerArray.shift();
}
