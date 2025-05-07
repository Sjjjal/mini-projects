function inputbox(val) {
document.getElementById("display").value = document.getElementById("display").value +val;

}
// clearDisplay:
function clearDisplay(){
    document.getElementById("display").value=" ";
}


function calculate(){


    var userinput =document.getElementById("display").value;
    var result =eval(userinput);
    document.getElementById("display").value =result;

}









