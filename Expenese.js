let myForm = document.querySelector('#my-Form')
let amountInput = document.querySelector('#amount')
let descriptionInput = document.querySelector('#description')
let categoryInput = document.querySelector('#category')
let itemInput = document.querySelector('#users')

myForm.addEventListener('submit', saveToStorage)


function saveToStorage(e)
{
    e.preventDefault()
    let amountAdd = amountInput.value
    let descriptionAdd = descriptionInput.value
    let categoryAdd = categoryInput.value

    let array = []
    let obj = {amountAdd,descriptionAdd,categoryAdd}

    array.push(obj)
    localStorage.setItem(obj.descriptionAdd,JSON.stringify(array))
    addItem(obj)


}

function addItem(obj){

    let amountAdd = amountInput.value
    let descriptionAdd = descriptionInput.value
    let categoryAdd = categoryInput.value

    let li = document.createElement('li');
    li.className='items'
    li.textContent =li.textContent + obj.amountAdd  + '     ' + obj.descriptionAdd + '    ' + obj.categoryAdd
    itemInput.append(li)

    let deletebtn = document.createElement('button')
    deletebtn.className ="btn btn-outline-dark"
    deletebtn.appendChild(document.createTextNode('Delete Expense'))
    li.append(deletebtn)

    deletebtn.onclick = () =>
    {
        localStorage.removeItem(obj.descriptionAdd)
        itemInput.removeChild(li)

    }


    let editbtn = document.createElement('button')
    editbtn.appendChild(document.createTextNode('Edit Expense'))
    editbtn.className ="btn btn-outline-dark"
    li.appendChild(editbtn)

    editbtn.onclick = () =>{

    localStorage.removeItem(obj.descriptionAdd)
    itemInput.removeChild(li)

    amountInput.value = obj.amountAdd
    descriptionInput.value = obj.descriptionAdd
    categoryInput.value = obj.categoryAdd
    }  



    

// //     let user = nameInput.value
// //     let emailID = emailInput.value
// //     let phoneNumber = phoneInput.value

// //     let li = document.createElement('li');
// //     li.className='items'
// //     // li.appendChild(document.createTextNode(user))
// //     // li.appendChild(document.createTextNode(emailID))
// //     // li.appendChild(document.createTextNode(phoneNumber))
// //     li.textContent =  li.textContent + obj.user + '    ' + obj.emailID + '    ' + obj.phoneNumber
// //     itemInput.append(li)

// //     let deletebtn = document.createElement('button')
// //     deletebtn.style.width='50px'
// //     deletebtn.className = 'btn btn-success'
// //     deletebtn.appendChild(document.createTextNode('X'))
// //     li.append(deletebtn)

// //     deletebtn.onclick = () =>
// //     {
// //         localStorage.removeItem(obj.emailID)
// //         itemInput.removeChild(li)

// //     }

// //     let editbtn = document.createElement('button')
// //     editbtn.appendChild(document.createTextNode('Edit'))
// //     editbtn.className = 'btn'
// //     editbtn.style.width='50px'
// //     li.appendChild(editbtn)

// //     editbtn.onclick = () =>{

// //         localStorage.removeItem(obj.emailID)
// //         itemInput.removeChild(li)

// //         nameInput.value = obj.user
// //         emailInput.value = obj.emailID
// //         phoneInput.value = obj.phoneNumber
// //     }  
}