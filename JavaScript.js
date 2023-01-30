// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e) =>{

//     e.preventDefault();
//     document.querySelector('#my-form').style.background='lightblue';
//     document.querySelector('body').classList.add('bg-dark');

// });

// btn.addEventListener('mouseover',(e) =>
// {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='lightblue';
//     document.querySelector('body').classList.add('bg-dark');
// });

// btn.addEventListener('mouseout',(e) =>
// {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='lightblue';
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();
    
    // if(nameInput.value === '' || emailInput.value ===''){
    //     msg.innerHTML = 'Please enter all fields'
    // }
    // else(

        localStorage.setItem('Username',nameInput.value)
        localStorage.setItem('email',emailInput.value)

        




        // console.log(nameInput.value,   emailInput.value)
        
        
    // )
}