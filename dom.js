// // console.dir(document);

// // console.dir(document.head);
// // console.dir(document.body);
// // console.dir(document.all);
// // console.dir(document.all[10]);
// // console.dir(document.forms);
// // console.dir(document.links);
// console.dir(document.images);


// console.log(document.getElementById('header-title'));

// let header_title = document.getElementById('header-title');

// console.log(header_title);

// header_title.textContent = "hello";
// header_title.innerText = "Wow";

// header_title.innerHTML = "<h1> hello there </h1>" 

// let header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 3px black";

// document.querySelector(".title").style.fontWeight = "bold";

// document.querySelector(".title").style.color = "Green" ; 

// Getting by elemntByClassName

// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[2]);
// items[1].style.fontWigth = "bold";
// items[2].textContent = "hey there";
// items[2].style.fontWeight = "Bold";
// items[2].style.backgroundColor = "green";


// for (let i = 0; i<items.length;i++){

//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = 'lightgrey'
    
// }


// Get elements By Tagname

let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);
li[1].style.fontWigth = "bold";
li[2].textContent = "hey there";
li[2].style.fontWeight = "Bold";
li[2].style.backgroundColor = "green";


for (let i = 0; i<li.length;i++){

    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = 'lightgrey'
    
}



