const endDate=" 09 March 2023 10:00 AM";
document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll('input')

//creating countdown with the help of js date obj

function clock(){
    const end =new Date(endDate)
    const now =new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end-now)/1000;//millisec converts into secs here
    console.log(diff);
    if(diff<0) return;
     inputs[0].value= Math.floor(diff/3600/24);
     inputs[1].value= (Math.floor(diff/3600)%24);
     inputs[2].value= (Math.floor(diff/60)%60);
     inputs[3].value= (Math.floor(diff)%60);
}

//clock()

setInterval(
    ()=>{
        clock()
    },1000
)