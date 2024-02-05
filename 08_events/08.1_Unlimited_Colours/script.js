const random_color = () => {
    let color = '#';
    const hex = '0123456789ABCSDEF';
    for(let i = 0; i < 6; ++i){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const beg = document.querySelector('#start');
const end = document.querySelector('#stop');

const bgColor = () => {
    const randomColor = random_color();
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
}
let intervalId = null;

beg.addEventListener('click',() => {
    if(!intervalId){
        intervalId = setInterval(bgColor, 1000);
    }
},false)

end.addEventListener('click',() => {
    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = '#F0F8FF';
},false);




