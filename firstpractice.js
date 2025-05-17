//const bt2 = document.querySelector('.bt2');
//bt2.addEventListener('click', function() {
  //  alert('why did you clicck me');
//});

//const h1 = document.querySelector('h1');
//const button = document.querySelector('button');
//button.addEventListener('click', function(){
  //  document.body.style.backgroundColor = 'blue' black;
//});
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', function() {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

});
