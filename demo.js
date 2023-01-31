const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phonenumber');
const item = document.getElementById('users');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
myForm.addEventListener('submit',addItem);
item.addEventListener('click',deleteItem);

function onSubmit(e){
    e.preventDefault();
    let name=nameInput.value;
    let email=emailInput.value;
    let phonenumber=phoneInput.value;


    let obj={ name,email,phonenumber

        }
    localStorage.setItem(obj.email,JSON.stringify(obj))



}
// Adding items as <li>
function addItem(e){
    e.preventDefault();

    // Grabbing input values
    let user = nameInput.value;
    let emailID = emailInput.value;
    let phonenumber = phoneInput.value;
    
    //  creating new li element
    let li = document.createElement('li');

    // adding class
    // li.className='items';

    // adding the text node with input to li
    li.appendChild(document.createTextNode(user))
    li.appendChild(document.createTextNode(emailID))
    li.appendChild(document.createTextNode(phonenumber))


    item.appendChild(li);

    // adding delete button

    let deletebtn = document.createElement('button');
    deletebtn.style.width='50px'
    deletebtn.className='btn btn-light delete';
    
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn)

}

// REMOVING ITEMS 
function deleteItem(e){

    if (e.target.classList.contains('delete')){
        // console.log(1);
        let li = e.target.parentElement;

        localStorage.removeItem("obj.email");
        item.removeChild(li);
        // ilocalStorage.removeItem("li.obj.email");
        // localStorage.clear();
    }
    
    

}