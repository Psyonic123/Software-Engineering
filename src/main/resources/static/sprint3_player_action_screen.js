let playerArray = [];
playerArray = JSON.parse(sessionStorage.getItem("playerArray"));
let color = "";
let codeName = "";
let id = "";
let total_score_red = 0;
let total_score_green = 0;
let arrNum = 0;
var Redtable = document.getElementById("redTable");
var Greentable = document.getElementById("greenTable");

for (let i = 0; i < playerArray.length; i++) {
  console.log(playerArray[i]);
  arrNum = playerArray.length / 3;
}

console.log(arrNum);


// var Redrow = Redtable.insertRow(rowCount);
// Redrow.insertCell(0).innerHTML = "Total";
// Redrow.insertCell(1).innerHTML = "Score:";
// Redrow.insertCell(2).innerHTML = total_score_red;

// var Greenrow = Greentable.insertRow(rowCount);
// Greenrow.insertCell(0).innerHTML = "Total";
// Greenrow.insertCell(1).innerHTML = "Score:";
// Greenrow.insertCell(2).innerHTML = total_score_green;

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

function update_score(id_gain,id_lost) {
  //parsing red table if ID is there, else parsing green table
  var redTable = document.getElementById("redTable");
  var greenTable = document.getElementById("greenTable");
  //Getting score test
  // console.log(redTable.rows[1].cells[2].innerHTML);

  //Getting ID test
  // console.log(redTable.rows[1].cells[1].innerHTML);

  //Getting row length
  // console.log(redTable.rows.length);

  //checking through red table
  for(let i = 1; i < redTable.rows.length; i++) {
    //checking red table for gain
    if(parseInt(redTable.rows[i].cells[1].innerHTML) == id_gain) {
      redTable.rows[i].cells[2].innerHTML = parseInt(redTable.rows[i].cells[2].innerHTML) + 100;
      console.log("Red player " + redTable.rows[i].cells[1].innerHTML + " is hitting!!!");
      document.getElementById("rEdpLayersCore").innerHTML = parseInt(document.getElementById("rEdpLayersCore").innerHTML) + 100;
    }
    //checking green table lost value
    if(parseInt(redTable.rows[i].cells[1].innerHTML) == id_lost) {
      redTable.rows[i].cells[2].innerHTML = parseInt(redTable.rows[i].cells[2].innerHTML) - 100;
      console.log("Red player " + redTable.rows[i].cells[1].innerHTML + " is dead!!!");
      document.getElementById("rEdpLayersCore").innerHTML = parseInt(document.getElementById("rEdpLayersCore").innerHTML) - 100;
    }
  }

  //checking through green table
  for(let i = 1; i < greenTable.rows.length; i++) {
    //checking red table for gain
    if(parseInt(greenTable.rows[i].cells[1].innerHTML) == id_gain) {
      greenTable.rows[i].cells[2].innerHTML = parseInt(greenTable.rows[i].cells[2].innerHTML) + 100;
      console.log("Green player " + greenTable.rows[i].cells[1].innerHTML + " is hitting!!!");
      document.getElementById("gReenpLayersCore").innerHTML = parseInt(document.getElementById("gReenpLayersCore").innerHTML) + 100;
    }
    //checking red table for lost value
    if(parseInt(greenTable.rows[i].cells[1].innerHTML) == id_lost) {
      greenTable.rows[i].cells[2].innerHTML = parseInt(greenTable.rows[i].cells[2].innerHTML) - 100;
      console.log("Green player " + redTable.rows[i].cells[1].innerHTML + " is dead!!!");
      document.getElementById("gReenpLayersCore").innerHTML = parseInt(document.getElementById("gReenpLayersCore").innerHTML) - 100;
    }    
  }
}

//udp grabber
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

    // var actionTable = document.getElementById("actionDisplayTable");
    // var actionRow = actionTable.insertRow();
    // var cell = actionRow.insertCell();
    // cell.innerHTML = taggerJSON.codeName + " hit " + tageeJSON.codeName;



    //printing whom hit whom
    document.getElementById("actionDisplayStringValues").innerHTML = taggerJSON.codeName + " laser'd " + tageeJSON.codeName + "<br><br>" + document.getElementById("actionDisplayStringValues").innerHTML;
    update_score(parseInt(taggerJSON.id),parseInt(tageeJSON.id));
  }
});


