// // Variables
// // let MyName = "Raul"
// //     MyPgae = "23"

// // alert(MyName);
// // alert(MyPgae)


// //Constante 
// // const MyBirthday = "16/03/07"
// // // alert(MyBirthday);
// let MyPgae = 33;
// let IsActive = true;
// let IsBlue = false;

// let MyHight = null;
// let MyHight2 = undefined;

// // INGRESO DE ARGUMENTOS 
// let year = prompt('año actual: ');
// // alert(year);

// // confirm
// let isBoss = confirm("eres el jefe?");
// // alert(isBoss);

// //operadores matematicos 
// let Num1 = 10;
// let Num2 = 20;

// // alert( Num1 + Num2)
// // alert( Num1 - Num2)
// // alert( Num1 * Num2)
// // alert( Num1 / Num2)

// let Num3 = 2;
// Num3++;
// alert(Num3);

// // operadores de comparacion 

// alert( 2 > 1 );
// alert( 2 < 1) ; 
// alert( 2 == 1); 
// alert( 2 != 1)

// // condicionales 

// let year = prompt(" ingrese el año actual:");
// if (year == 2024) {
//     alert ("Muy Bien ");
//     alert ( " eres genial ");
// } else if ( year < 2024){
//     alert ("Muy bajo")
// }else if ( year > 2024){
//     alert ("Muy alto")
// }else {
//     alert ("No es correcto")
// }

// operadores logicos 
// or || 
// alert( true || true); // true
// alert( true || false); //true
// alert( false || true); // true
// alert( false || false); //false


// let hour = 12;
// let isWeekend = true;

// if (hour < 9 || hour >18 || isWeekend){
//     alert (" La oficina esta cerrada ")
// } else {
//     alert("open!");
// }

// and &&
// alert (true && true); // true
// alert (true && false); // true
// alert (false && true); // true
// alert (false && false); // true
// let admin1
// let user = prompt(" ingrese su nombre");
// if(user === "admin") {
//         let pass = prompt("Ingrese su contraseña")
//         if (pass === "1234567890")
//             alert("Bienvenido")
//         else 
//             alert("contraseña incorrecta")
//     // } else if ( pass < 16032007){
//     //     alert ("Contraseña incorrecta")
//     // }else if ( year > 16032007){
//     //     alert ("Contraseña incorrecta")
//     // }else if ( pass = 16032007){
//     //     alert ("Contraseña incorrecta")
//     // }else {
//     //     alert ("La contraseña es incorrecto ")
//     // }
// }else
//     alert("no se quien eres")



// let year = prompt(" ingrese el año actual:");
// if (year == 2024) {
//     alert ("Muy Bien ");
//     alert ( " eres genial ");
// } else if ( year < 2024){
//     alert ("Muy bajo")
// }else if ( year > 2024){
//     alert ("Muy alto")
// }else {
//     alert ("No es correcto")
// }

// // ciclos while 
// while(condicion){
//         sentences;
//         sentences;
// }


// let counter = 0;

// while (counter < 3){
//     alert (counter)
//     counter++;
// }

// ciclo for 
// for (ByteLengthQueuingStrategy; CSSConditionRule, step); {
//     // for body
// }

// for ( let counter =0; counter < 3; counter++) {
//     alert(counter);
// }

// funciones
// function showMessage(){
//     alert("hola mundo");
// }
// showMessage();
// showMessage();

// funciones con variables locales 
// funciones
// function showMessage(){
//     let message = "epale :)"
//     alert(message);
// }
// showMessage();
// alert(message);

// funciones con variables externas
let userName = "juan";

function showMessage(){
    let message = "epale :) " + userName;
    alert(message);
}

showMessage();