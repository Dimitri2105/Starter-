// // // console.dir(document);

// // // console.dir(document.head);
// // // console.dir(document.body);
// // // console.dir(document.all);
// // // console.dir(document.all[10]);
// // // console.dir(document.forms);
// // // console.dir(document.links);
// // console.dir(document.images);


// // console.log(document.getElementById('header-title'));

// // let header_title = document.getElementById('header-title');

// // console.log(header_title);

// // header_title.textContent = "hello";
// // header_title.innerText = "Wow";

// // header_title.innerHTML = "<h1> hello there </h1>" 

// // let header = document.querySelector('#main-header');
// // header.style.borderBottom = "solid 3px black";

// // document.querySelector(".title").style.fontWeight = "bold";

// // document.querySelector(".title").style.color = "Green" ; 

// // Getting by elemntByClassName

// // let items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // console.log(items[2]);
// // items[1].style.fontWigth = "bold";
// // items[2].textContent = "hey there";
// // items[2].style.fontWeight = "Bold";
// // items[2].style.backgroundColor = "green";


// // for (let i = 0; i<items.length;i++){

// //     items[i].style.fontWeight = 'bold';
// //     items[i].style.backgroundColor = 'lightgrey'
    
// // }


// // Get elements By Tagname

// // let li = document.getElementsByTagName("li");
// // console.log(li);
// // console.log(li[2]);
// // li[1].style.fontWigth = "bold";
// // li[2].textContent = "hey there";
// // li[2].style.fontWeight = "Bold";
// // li[2].style.backgroundColor = "green";


// // for (let i = 0; i<li.length;i++){

// //     li[i].style.fontWeight = 'bold';
// //     li[i].style.backgroundColor = 'lightgrey'
    
// // }


// //  using QuerySelector

// // let header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 3px lightblue';


// // let input = document.querySelector('input');
// // input.value = "Welcome";

// // let submit = document.querySelector('input[type="submit"]')
// // submit.value = "Send";

// // let items = document.querySelector('.list-group-item');
// // items.style.color = 'red';

// // let lastChild = document.querySelector('.list-group-item:last-Child');
// // lastChild.style.color = 'blue';

// let secondChild = document.querySelector('.list-group-item:nth-Child(2)');
// secondChild.style.backgroundColor = 'green';

// let thirdChild = document.querySelector('.list-group-item:nth-Child(3)');
// thirdChild.style.visibility = 'hidden';


// //  using QuerySelectorALl

// let titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Hello';

// let seconditem = document.querySelectorAll('.list-group-item');
// seconditem[1].style.color = 'darkGreen';



// let odd = document.querySelectorAll('li:nth-child(odd');

// for (let i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'lightGreen'
// }




// ------------------------------------------------------------------------------------

// TRAVERSING DOM

// --------------------------------------------------------------------------------------


// Parent Node

let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightGrey';

// Parent Child

// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightGrey';


// Child Node

// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[2].style.color='blue';

// FirstChild
// console.log(itemList.firstChild);

// FirstElemetChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hey';

// lastChild
// console.log(itemList.lastChild);

// // lastElemetChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello';


// // next Sibling
// console.log(itemList.nextSibling);

// // next Elemnet Sibling
// console.log(itemList.nextElementSibling);

// previous Sibling
// console.log(itemList.previousSibling);

// previous Elemnet Sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.borderBottom = 'solid 4px black';

// --------------------------------------------------------------------------------

// CREATING ELEMENTS

// let newDiv = document.createElement("div")

// // Adding a class 
// newDiv.className= 'hey';

// // Adding ID
// newDiv.id = "hello"

// // Adding attribute
// newDiv.setAttribute('title','i am jS');

// // Adding a text to created element
// let divText = document.createTextNode("HEllo word");

// // Appending the text to element created
// newDiv.appendChild(divText);


// // Adding this element into the HTML code here we are putting it right below header container and before h1
// // Thus we are creating two variables and grabing header container and header h1

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1" );

// // appeding this newDiv 
// container.insertBefore(newDiv,h1);


// console.log(newDiv)


// Adding element before item 1
let item = document.createElement("div")
item.id="hello"
item.setAttribute('title',"hey")
item.className="hey there";

let itemText = document.createTextNode("HEllo word");
item.appendChild(itemText);

let ul = document.querySelector('ul');
let li = document.querySelector('li');

ul.insertBefore(item,li);

console.log(ul);
console.log(li);


console.log(item);

