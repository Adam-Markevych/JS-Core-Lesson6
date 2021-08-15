
let i = 0;
document.querySelector('.block').addEventListener('mouseover', function(){

    if(i === 0){
        event.target.style.backgroundColor = 'red';
        i++
    }
    else if(i === 1){
        event.target.style.backgroundColor = 'yellow';
        i++
    }
    else if(i === 2){
        event.target.style.backgroundColor = 'green';
        i = 0;
    }
})
    
    document.querySelector('.block').addEventListener('mouseout', function(){
        event.target.style.backgroundColor = 'blueviolet';
})
    


