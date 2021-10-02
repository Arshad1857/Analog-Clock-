setInterval(() => {
    d = new Date();
    htime = d.getHours();  /*To get hours*/
    mtime = d.getMinutes(); /*To get minutes*/
    stime = d.getSeconds(); /*To get seconds*/
    hrotation = 30*htime + mtime/2 + stime/120; /*Hour hand rotation setting*/
    mrotation = 6*mtime + stime/10; /*Minute hand rotation setting*/
    srotation = 6*stime; /*Second hand rotation setting*/

    hour.style.transform = `rotate(${hrotation}deg)`;  
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);
