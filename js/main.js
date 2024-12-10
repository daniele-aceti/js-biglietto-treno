const distance = prompt(`Quanti Km vuoi percorrere?`);
const age = prompt(`Quanti anni hai?`);

const ticket = 0.21 * distance;

if(isNaN(distance) || isNaN(age)){
    console.log(`Inserisci un numero valido, ricarica la pagina`)
}else { 
    if (age >= 65){
    const sale40 = ticket - (ticket*40)/100;
    console.log(`€${sale40.toFixed(2).replace(".",",")}`)
}else if (age <= 18){
    const sale20 = ticket - (ticket*20)/100;
    console.log(`€${sale20.toFixed(2).replace(".",",")}`)

}else{
    console.log(`€${ticket.toFixed(2).replace(".",",")}`)
    
}
}