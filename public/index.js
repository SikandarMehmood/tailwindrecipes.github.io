const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

//add event listener to the burget id
burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});

/*burger.addEventListener('mouseover', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})*/