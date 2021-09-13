

let Operator = prompt("Choose an Operation: \n 1 - Addition \n 2 - Subtraction \n 3 - Multiplication \n 4 - Division");
if(Operator > 4 || Operator < 1){
invalid();
}
else{

    let a = prompt("Input the first number");
let b = prompt("Input the second number");
var parsA = parseInt(a);
var parsB = parseInt(b);

if (Operator == 1){

    add(parsA,parsB);

}
else if(Operator ==2){

    sub(parsA,parsB);

}

else if(Operator ==3){
    
    mul(parsA,parsB);

}


else if(Operator ==4){
    
    div(parsA,parsB);

}




}











function invalid(){
alert("Input is invalid");

return;

}
function add(parsA,parsB){

   var c = parsA+parsB;
   alert(c);
return;
}


function sub(parsA,parsB){

    var c = parsA-parsB;
    alert(c);
 return;
 }



 function mul(parsA,parsB){

    var c = parsA*parsB;
    alert(c);
 return;
 }

 function div(parsA,parsB){

    var c = parsA/parsB;
    alert(c);
 return;
 }