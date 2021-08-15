

document.querySelector('h1').addEventListener('mouseover',function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'green';
    document.querySelector('h1').textContent = 'Хочеш знати який?';
})
document.querySelector('h1').addEventListener('mouseout',function(){
    event.target.style.backgroundColor = 'blueviolet';
    event.target.style.color = 'black';
    document.querySelector('h1').textContent = 'У мене є секрет';
})
document.querySelector('h1').addEventListener('mousedown',function(){
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    document.querySelector('h1').textContent = 'А я тобі не скажу!';
})
document.querySelector('h1').addEventListener('mouseup',function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'green';
    document.querySelector('h1').textContent = 'Хочеш знати який?';
})
