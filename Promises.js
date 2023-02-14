// const posts = [
//     {title : "post one" , body: "this is post one"},
//     {title : "post two" , body: "this is post two"},

// ];
// function getpost(){
//     setTimeout(() =>{

//         let output = '';
//         posts.forEach((post) =>{
//             output += `<li>${post.title}</li>`;

//         });
//         document.body.innerHTML=output;
//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             posts.push(post)
//             const error = false;
//         if(!error){
//             resolve();
//         } else{
//             reject('Error : Something wrong')
//         }
//         },2000);   
//     });
    

// }

// // createPost({title : 'post three', body:'This is post three'})
// // .then(getpost).
// // catch(err => console.log(err))


// // USING PROMISE.ALL

// const promise1 = Promise.resolve('HEY THERE');
// const promise2 = 10;
// const promise3 = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         console.log("I m timer")
//         resolve();
//     }, 2000);
// })
// const promise4 = new Promise((resolve,reject) => 
//     setTimeout( resolve ,3000,"I m promise")
// );

// Promise.all([promise1,promise2,promise3,promise4])
// .then( (values) => {
//     console.log(values)
// })



// DELIVERABLE


const user ={
    username:" Karan",
    LastUserActivityTime : new Date()
}
const posts = [
    {title : "post one" , body: "this is post one"},
    {title : "post two" , body: "this is post two"},

];
function getpost(){
    setTimeout(() =>{

        let output = '';
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;
    },1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post)
            const error = false;
        if(!error){
            resolve();
        } else{
            reject('Error : Something wrong')
        }
        },2000);   
    });
}
function deletePost(){
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            if( posts.length > 0){
                resolve(posts.pop())
            }
            else{
                reject("ARRAY IS EMPTY")
            }
            
        }, 1000);
    })
} 

function updateLastUserActivityTime(){
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            user.LastUserActivityTime = new Date()
            resolve(user.LastUserActivityTime)

            
        }, 1000);
        
    })
}
// function helper(){
//     Promise.all([createPost({title: 'Post Three', body: 'This is Post Three'}), updateLastUserActivityTime()])

// }
Promise.all([createPost({title: 'Post Three', body: 'This is Post Three'}), updateLastUserActivityTime()])
.then( (values) =>{
    console.log(values)
    getpost()
    deletePost().then( ()=>{
        getpost()
        

    })
    
    
})






    




