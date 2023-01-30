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
const phoneInput = document.querySelector('#phonenumber');
const item = document.getElementById('users');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// myForm.addEventListener('submit',onSubmit);
myForm.addEventListener('submit',addItem);

// function onSubmit(e){

//     e.preventDefault();
    
//     // if(nameInput.value === '' || emailInput.value ===''){
//     //     msg.innerHTML = 'Please enter all fields'
//     // }
//     // else(

//         // localStorage.setItem('Username',nameInput.value)
//         // localStorage.setItem('email',emailInput.value)

//         // STORING USERDETAILS AS OBJECTS IN LOCAL STORAGE

//         nameAsString = JSON.stringify(nameInput.value)
//         emailAsString = JSON.stringify(emailInput.value)
//         phoneAsString = JSON.stringify(phoneInput.value)

//         localStorage.setItem('Username',nameAsString)
//         localStorage.setItem('email',emailAsString)
//         localStorage.setItem('phoneNumber',phoneAsString)

        





        




//         // console.log(nameInput.value,   emailInput.value)
        
        
//     // )
// }


// -----------------------------------------------

function addItem(e){
    e.preventDefault();

    // Grabbing input values
    let user = document.getElementById('name').value;
    let emailID = document.getElementById('email').value;
    let phonenumber = document.getElementById('phonenumber').value;
    
    //  creating new li element
    let li = document.createElement('li');

    // adding class
    // li.className='items';

    // adding the text node with input to li
    li.appendChild(document.createTextNode(user))
    li.appendChild(document.createTextNode(emailID))
    li.appendChild(document.createTextNode(phonenumber))


    item.appendChild(li);

}