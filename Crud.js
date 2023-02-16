//  USING CRUD 
{/* <script src ="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js"></script> */}

let myForm = document.querySelector('#my-form')
let  nameInput  = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let phoneInput = document.querySelector('#phonenumber')
let itemInput = document.querySelector('#users')


// myForm.addEventListener('submit', addItem)
myForm.addEventListener('submit',saveToStorage)

function addItem(obj){

    

    let user = nameInput.value
    let emailID = emailInput.value
    let phoneNumber = phoneInput.value

    let li = document.createElement('li');
    li.className='items'
    // li.appendChild(document.createTextNode(user))
    // li.appendChild(document.createTextNode(emailID))
    // li.appendChild(document.createTextNode(phoneNumber))
    li.textContent =  li.textContent + obj.user + '    ' + obj.emailID + '    ' + obj.phoneNumber
    itemInput.append(li)

    let deletebtn = document.createElement('button')
    deletebtn.style.width='50px'
    deletebtn.className = 'btn btn-success'
    deletebtn.appendChild(document.createTextNode('X'))
    li.append(deletebtn)

    deletebtn.onclick = () =>
    {
        localStorage.removeItem(obj.emailID)
        itemInput.removeChild(li)

    }

    let editbtn = document.createElement('button')
    editbtn.appendChild(document.createTextNode('Edit'))
    editbtn.className = 'btn'
    editbtn.style.width='50px'
    li.appendChild(editbtn)

    editbtn.onclick = () =>{

        localStorage.removeItem(obj.emailID)
        itemInput.removeChild(li)

        nameInput.value = obj.user
        emailInput.value = obj.emailID
        phoneInput.value = obj.phoneNumber
    }  
}
function saveToStorage(e)
{
    e.preventDefault()
    let user = nameInput.value
    let emailID = emailInput.value
    let phoneNumber = phoneInput.value

    let obj = {user,emailID,phoneNumber}

    // array.push(obj)
    // localStorage.setItem(obj.emailID,JSON.stringify(array))

    axios.post("https://crudcrud.com/api/ff051174c1bf4da286e19acc37f447bf/appintmentData",obj)
    .then( (response) =>{
        addItem(response.data)
        // console.log(response)
    })
    .catch( (error) => {
        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
    })

    // addItem(obj)


}
