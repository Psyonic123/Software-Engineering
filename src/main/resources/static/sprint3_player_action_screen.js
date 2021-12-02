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

document.addEventListener("DOMContentLoaded", async () => {
  while (true) {
    try {
      var url = "http://localhost:8080/api/startServer";
      const response = await fetch(url, {
        mode: "no-cors",
      });
      var players = await response.json();
      console.log(players);
    } catch (e) {
      console.log(e);
    }
    var playersArray = players.data.toString().split(":");
    console.log(playersArray);

    tagURL = "http://localhost:8080/api/getPlayer/" + playersArray[0];
    const player1 = await fetch(tagURL, {
      mode: "no-cors",
    });
    //get first player
    var tagger = await player1.json();
    var taggerJSON = JSON.stringify(tagger);
    taggerJSON = JSON.parse(taggerJSON);
    console.log(taggerJSON);

    // get second player
    tagURL2 = "http://localhost:8080/api/getPlayer/" + playersArray[1];
    const player2 = await fetch(tagURL2, {
      mode: "no-cors",
    });
    var tagee = await player2.json();
    var tageeJSON = JSON.stringify(tagee);
    tageeJSON = JSON.parse(tageeJSON);
    console.log(tageeJSON);

    var actionTable = document.getElementById("actionDisplayTable");
    var actionRow = actionTable.insertRow();
    var cell = actionRow.insertCell();
    cell.innerHTML = taggerJSON.codeName + " hit " + tageeJSON.codeName;
  }
});
