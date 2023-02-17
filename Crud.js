//  USING CRUD
{
  /* <script src ="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js"></script> */
}

let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phonenumber");
let itemInput = document.querySelector("#users");

let hiddenID = document.querySelector(".hiddenID");

// console.log(hiddenID.innerText)
// console.log(hiddenID.textContent)

// myForm.addEventListener('submit', addItem)
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  if (hiddenID.textContent.trim()) {
    updateUser(e,hiddenID.textContent);
  }
  else(
    saveToStorage(e)
  )
});

function addItem(obj) {
  let user = obj.user;
  let emailID = obj.emailID;
  let phoneNumber = obj.phoneNumber;

  let li = document.createElement("li");
  li.className = "items";
  li.textContent =
    li.textContent + obj.user + "    " + obj.emailID + "    " + obj.phoneNumber;
  itemInput.append(li);

  let deletebtn = document.createElement("button");
  deletebtn.style.width = "50px";
  deletebtn.className = "btn btn-success";
  deletebtn.appendChild(document.createTextNode("X"));
  li.append(deletebtn);

  deletebtn.onclick = (e) => deleteUser(e, obj._id);

  let editbtn = document.createElement("button");
  editbtn.appendChild(document.createTextNode("Edit"));
  editbtn.className = "btn";
  editbtn.style.width = "50px";
  li.appendChild(editbtn);

  // editbtn.onclick = () =>{

  //     localStorage.removeItem(obj.emailID)
  //     itemInput.removeChild(li)

  //     nameInput.value = obj.user
  //     emailInput.value = obj.emailID
  //     phoneInput.value = obj.phoneNumber
  // }
  editbtn.onclick = (e) => {
    hiddenID.textContent = obj._id;
    nameInput.value = obj.user;
    emailInput.value = obj.emailID;
    phoneInput.value = obj.phoneNumber;
    itemInput.removeChild(e.target.parentElement);

    // updateUser(e,obj._id);

  };

  myForm.reset();
}

function saveToStorage(e) {
  e.preventDefault();
  let user = nameInput.value;
  let emailID = emailInput.value;
  let phoneNumber = phoneInput.value;

  let obj = { user, emailID, phoneNumber };

  // array.push(obj)
  // localStorage.setItem(obj.emailID,JSON.stringify(array))

  axios
    .post(
      "https://crudcrud.com/api/2366abbc9cc24da3b3b137fe1198bf6d/appointmentData",
      obj
    )
    .then((response) => {
      addItem(response.data);
      // console.log(response)
    })
    .catch((error) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h3> Something Went Wrong </h3>";
      console.log(error);
    });
  // addItem(obj)
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/2366abbc9cc24da3b3b137fe1198bf6d/appointmentData"
    )
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        addItem(response.data[i]);
      }
    })
    .catch((error) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h3> Something Went Wrong </h3>";
      console.log(error);
    });
});

function deleteUser(e, obj_id) {
  axios
    .delete(
      `https://crudcrud.com/api/2366abbc9cc24da3b3b137fe1198bf6d/appointmentData/${obj_id}`
    )
    .then((response) => {
      // console.log(e.target.parentElement)
      itemInput.removeChild(e.target.parentElement);
      // console.log(e)
    })
    .catch((error) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h3> Something Went Wrong </h3>";
      console.log(error);
    });
}


//  Using simple logic to delete user

// function updateUser(e, obj, obj_id) {

//     deleteUser(e,obj_id)
// }

function updateUser(e,obj_id) {
  let user = nameInput.value;
  let emailID = emailInput.value;
  let phoneNumber = phoneInput.value;
  const newObj = { user, emailID, phoneNumber 

  };
  
    axios.put(`https://crudcrud.com/api/2366abbc9cc24da3b3b137fe1198bf6d/appointmentData/${obj_id}`,newObj)
      .then((response) => {
        addItem(newObj)
      })
      .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
      })
      hiddenID.textContent=''
      myForm.reset();
}