function delay_and_switch() {
    var time_delay_ms = 3100;
    setTimeout(function(){
        console.log("Inside set timeout function");
        window.location.href = "sprint-2-frontend-player-entry.html";
    }, time_delay_ms); 
    console.log("End of delay_and_switch");
}
