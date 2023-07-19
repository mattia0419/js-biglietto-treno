const kmeters = parseFloat(prompt("Inserire i km da percorrere:"));
const age = parseInt(prompt("inserire l'età del passeggero: "));

let ticket_price = kmeters * 0.21 ;

if(age < 18){
    ticket_price =ticket_price - ticket_price * 20 / 100 ;
}
else if(age > 65){
    ticket_price =ticket_price - ticket_price * 40 / 100 ;
}
const final_price = ticket_price.toFixed(2) + "€";
const final_price_text = `${final_price}`
document.getElementById("ticket_price-1").innerHTML = final_price_text