let colorChange;

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

document.querySelector("#start").
addEventListener('click', () => {
    if(!colorChange){
        colorChange = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }    
});

document.querySelector("#stop").
addEventListener('click', () => {
    clearInterval(colorChange);
    colorChange = null;
});