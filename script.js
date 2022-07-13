let deadline = new Date("nov 1, 2022 22:35:00").getTime();

let time = setInterval(function (){
let now = new Date().getTime();
let t = deadline - now;

let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
let min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seg = Math.floor((t % (1000 * 60)) / 1000)

document.getElementById("day").innerHTML =days;
document.getElementById("hour").innerHTML =hours + ":";
document.getElementById("minute").innerHTML = min + ":"; 
document.getElementById("second").innerHTML =seg;
})