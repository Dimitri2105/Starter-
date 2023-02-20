let myForm = document.querySelector('#my-form')
let sellingPrice = document.querySelector('#selling')
let productName = document.querySelector('#productName')
let itemInput = document.querySelector('#users')
let sumOfItems = document.querySelector('#sumOfProducts')
let total = 0

const CRUDLINK = 'https://crudcrud.com/api';
const CRUDKEY = 'f391a740e4734243904f0c76b67cf0c6';
const CRUDRESOURCE = 'productsData';

myForm.addEventListener('submit',saveToStorage)


// Adding Items

function addItem(obj){

    let priceAdded = sellingPrice.value
    let productNameAdded = productName.value
    

    let li = document.createElement('li');
    li.className='items';
    let nameSpan = document.createElement('span');
    nameSpan.textContent = obj.productNameAdded;
    let priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = obj.priceAdded;
    li.appendChild(priceSpan);
    li.appendChild(document.createTextNode('    '));
    li.appendChild(nameSpan);
    itemInput.append(li);
    

    let deletebtn = document.createElement('button')
    deletebtn.style.width='50px'
    deletebtn.className = 'btn btn-outline-primary'
    deletebtn.appendChild(document.createTextNode('X'))
    li.append(deletebtn)

    deletebtn.onclick = (e) => deleteItem(e,obj._id) 

    calculateSum()

    myForm.reset()
}




// Saving in Crud Crud 

function saveToStorage(e)
{
    e.preventDefault()
    let priceAdded = sellingPrice.value
    let productNameAdded = productName.value

    let obj = {priceAdded,productNameAdded}

    axios
    .post(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}`,obj)
    .then( (response) =>{
        addItem(response.data)
    })
    .catch( (error) => {
        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
    })
}

// Reloading DOM on refresh

window.addEventListener("DOMContentLoaded",()=>{

    axios.get(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}`)
    .then( (response) => {
        for( var i = 0;i<response.data.length;i++){
            addItem(response.data[i])
            
        }
        calculateSum();
        

    })
    .catch( (error) => {
        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
    })
})

// Deleting Items

function deleteItem(e,obj_id){

    
    axios.delete(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}/${obj_id}`)
    .then( (response) =>{

        itemInput.removeChild(e.target.parentElement)
        calculateSum()

    })
    .catch( (error) => {

        document.body.innerHTML =  document.body.innerHTML + "<h3> Something Went Wrong </h3>"
        console.log(error)
        
    })

    // total -= Number(e.target.parentElement.firstChild.textContent);
    // sumOfItems.textContent = 'Total: ' + total;
    
    myForm.reset()

    }

//  Function for price


function calculateSum() {
    let sum = 0;
    const priceSpans = itemInput.querySelectorAll('.price');
    for (let i = 0; i < priceSpans.length; i++) {
      let price = parseFloat(priceSpans[i].textContent);
      sum += price;
    }
    sumOfItems.textContent = sum.toFixed(2);
  }