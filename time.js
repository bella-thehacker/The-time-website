let time = document.getElementById("currentTime");

setInterval(() =>{
let d = new Date();
time.innerHTML = d.toLocaleTimeString("en-GB", {hour12: false});
},1000);