function delay_and_switch() {
    var time_delay_ms = 3000;
    setTimeout(function(){
        console.log("Inside set timeout function");
        window.location.href = "player_test_screen.html";
    }, time_delay_ms); 
    console.log("End of delay_and_switch");
}