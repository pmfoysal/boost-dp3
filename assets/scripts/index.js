document.querySelector('button').addEventListener('click', function () {
   const color = generateColor();
   document.body.style.backgroundColor = color;
   document.querySelector('h2').innerHTML = color;
});

function generateColor() {
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);

   return `rgb(${red}, ${green}, ${blue})`;
}
