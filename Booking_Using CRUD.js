//  USING CRUD 
{/* <script src ="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js"></script> */}

let myForm = document.querySelector('#my-form')
let  nameInput  = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let phoneInput = document.querySelector('#phonenumber')
let itemInput = document.querySelector('#users')


myForm.addEventListener('submit',saveToStorage)


function addItem(obj){

    let user = obj.user
    let emailID = obj.emailID
    let phoneNumber = obj.phoneNumber

    let li = document.createElement('li');
    li.className='items';
    li.textContent =  li.textContent + obj.user + '    ' + obj.emailID + '    ' + obj.phoneNumber
    itemInput.append(li)

    let deletebtn = document.createElement('button')
    deletebtn.style.width='50px'
    deletebtn.className = 'btn btn-success'
    deletebtn.appendChild(document.createTextNode('X'))
    li.append(deletebtn)

    deletebtn.onclick = (e) => deleteUser(e,obj._id) 

    let editbtn = document.createElement('button')
    editbtn.appendChild(document.createTextNode('Edit'))
    editbtn.className = 'btn'
    editbtn.style.width='50px'
    li.appendChild(editbtn)

    editbtn.onclick =(e) => updateUser(e,obj,obj._id)
}

function saveToStorage(e)
{
    e.preventDefault()
    let user = nameInput.value
    let emailID = emailInput.value
    let phoneNumber = phoneInput.value

    let obj = {user,emailID,phoneNumber}

    axios
    .post("https://crudcrud.com/api/0dfa2e5dfd664758add5b68875128b85/appointmentData",obj)
    .then( (response) =>{
        addItem(response.data)
    })
    .catch( (error) => {
        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
    })
}


window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/0dfa2e5dfd664758add5b68875128b85/appointmentData")
    .then( (response) => {
        for( var i = 0;i<response.data.length;i++){
            addItem(response.data[i])
        }
        

    })
    .catch( (error) => {
        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
    })
})


function deleteUser(e,obj_id){

    
    axios.delete(`https://crudcrud.com/api/0dfa2e5dfd664758add5b68875128b85/appointmentData/${obj_id}`)
    .then( (response) =>{

        itemInput.removeChild(e.target.parentElement)
    })
    .catch( (error) => {

        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
        
    })

    }

function updateUser(e, obj, obj_id) {
  nameInput.value = obj.user;
  emailInput.value = obj.emailID;
  phoneInput.value = obj.phoneNumber;

  itemInput.removeChild(e.target.parentElement)

  myForm.removeEventListener("submit", saveToStorage); // disable adding new items while updating

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let updatedObj = {
      user: nameInput.value,
      emailID: emailInput.value,
      phoneNumber: phoneInput.value,
    };

    axios
      .put(
        `https://crudcrud.com/api/0dfa2e5dfd664758add5b68875128b85/appointmentData/${obj_id}`,
        updatedObj
      )
      .then((response) => {
        addItem(updatedObj)
        myForm.removeEventListener('submit', arguments.callee);
        myForm.addEventListener('submit',saveToStorage)
      })
      .catch((error) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h3> Something Went Wrong </h3>";
        console.log(error);
      });
  });
}
