


setInterval(function(){
    let a = new Date();


    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();


    console.log(a);
    console.log(min);
    console.log(sec);


    document.getElementById("hour").innerHTML= hour;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;

}, 1000);