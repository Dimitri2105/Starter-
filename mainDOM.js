var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);




// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item-2').value;

  // Create new li element
  var li = document.createElement('li');
  
  // Add class
  li.className = 'list-group-item';
//   li2.className = 'list-group-item';


  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  
  li.appendChild(document.createTextNode(newItem2));
  

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
   editbtn.className='btn btn-light btn-sm float-right delete';
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


// Filter events

function filterItems(e){
    
    // converting the text we tye in search bar to lowercase
    let text = e.target.value.toLowerCase();

    // grabbing all li's within itemlist we already created itemList varibale in begining use that
    let items = itemList.getElementsByTagName('li');

    // turing the HTML collecion of items to array and iterating them using forEach()
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        let item2Name = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || item2Name.toLowerCase().indexOf(text) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }




