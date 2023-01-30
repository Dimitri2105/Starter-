var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  

   // Creating a delete button

   let deletebtn= document.createElement('button');
  
   // adding classes to del buttin 
 
   deletebtn.className = 'btn btn-danger btn-sm float-right delete';
   //  append tex node
   
   deletebtn.appendChild(document.createTextNode('X'));
 
   //  appending the delete button to li element
    li.appendChild(deletebtn);
   //adding  an edit button

   let editbtn = document.createElement('button');
   editbtn.className='btn btn-danger btn-sm float-right delete';
   editbtn.appendChild(document.createTextNode('Edit'));
   li.append(editbtn);



  // Append li to list
  itemList.appendChild(li);

  


}

// FUNCTION remove item

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }   
}

