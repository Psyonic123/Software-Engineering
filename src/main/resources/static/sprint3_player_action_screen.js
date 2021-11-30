let playerArray = [];
playerArray = JSON.parse(sessionStorage.getItem("playerArray"));
let color = "";
let codeName = "";
let id = "";

let arrNum = 0;

for (let i = 0; i < playerArray.length; i++) {
  console.log(playerArray[i]);
  arrNum = playerArray.length / 3;
}

console.log(arrNum);

for (let i = 0; i < arrNum; i++) {
  color = playerArray[2];
  codeName = playerArray[0];
  id = playerArray[1];
  if (color == "red") {
    var table = document.getElementById("redTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
  } else {
    var table = document.getElementById("greenTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
  }
  row.insertCell(0).innerHTML = codeName;
  row.insertCell(1).innerHTML = id;
  row.insertCell(2).innerHTML = "0";
  playerArray.shift();
  playerArray.shift();
  playerArray.shift();
}
async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
function getTaggedPlayers() {
  var playerName = document.getElementById("playerName");
  var playerID = document.getElementById("playerID");

  let URL_get = "http://localhost:8080/api/startServer";
  //let URL_get = "https://sweteamalpha.herokuapp.com/api/getPlayer/" + playerID.value;
  console.log(URL_get);
  fetchAsync(URL_get)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getTaggedPlayers();
