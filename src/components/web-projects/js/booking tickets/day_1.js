// new features :
// -add all tickets per day feature (when btn "save" clicked -> add all tickets that sold in day by addding (count) value to it before set the (count) value to zero)
// -add limits to the tickets (by conditions in add func ) 


let element = document.getElementById("element");
let count = 0;
let allTickets = 0;
element.innerHTML = count;

function add() {

    if (allTickets > 9) {   
        element.innerText = "ALL TICKETS ARE SOLD OUT!";
        return;
    }
    else if (allTickets + count > 9) {
        element.innerText = "ALL TICKETS ARE SOLD OUT!";
        return;
    }
    else{
    count += 1;
    element.innerText = count;
    } 
}

let prevTickets = document.getElementById("prev-nums");
let allNums = document.getElementById("all-nums");

function save() {
    if (count != 0) {
        prevTickets.innerHTML += count + " | ";
        allTickets += count; // Update allTickets 
    }
    allNums.innerHTML = allTickets;
    count = 0;
    element.innerHTML = count;
}
// new features :
// -add all tickets per day feature (when btn "save" clicked -> add all tickets that sold in day by addding (count) value to it before set the (count) value to zero)
// -add limits to the tickets (by conditions in add func ) 