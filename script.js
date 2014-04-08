// Function to control LEDs
function buttonClick(clicked_id){

    if (clicked_id == "1"){
        $.get( "curl.php", {
        pin: "7", state: "1"} );  
    } 

    if (clicked_id == "2"){
        $.get( "curl.php", {
        pin: "7", state: "0"} );  
    } 

    if (clicked_id == "3"){
        $.get( "curl.php", {
        pin: "8", state: "1"} );  
    } 

    if (clicked_id == "4"){
        $.get( "curl.php", {
        pin: "8", state: "0"} );  
    } 

}