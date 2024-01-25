// generating random color

const randomcolor=function(){
    let hax="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        color+=hax[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalid;
let color=randomcolor();
const startchangingcolor=function(){
    if(!intervalid){
        intervalid=   setInterval(changecolor,1000);
    }
 
    function changecolor(){
        document.body.style.backgroundColor=randomcolor();
    }
}
const stopchangingcolor=function(){
    clearInterval(intervalid)
    intervalid=null
};

document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);