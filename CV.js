const link = document.querySelector('a');
const headerColor = document.getElementById("header");

link.addEventListener('click', () => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    headerColor.style.backgroundColor = color;;
    console.log(color);
})