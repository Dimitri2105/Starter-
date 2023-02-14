// // // // const posts = [
// // // //     {title : "post one" , body: "this is post one"},
// // // //     {title : "post two" , body: "this is post two"},

// // // // ];
// // // // function getpost(){
// // // //     setTimeout(() =>{

// // // //         let output = '';
// // // //         posts.forEach((post) =>{
// // // //             output += `<li>${post.title}</li>`;

// // // //         });
// // // //         document.body.innerHTML=output;
// // // //     },1000)
// // // // }

// // // // function createPost(post){
// // // //     return new Promise((resolve, reject) => {
// // // //         setTimeout(() =>{
// // // //             posts.push(post)
// // // //             const error = false;
// // // //         if(!error){
// // // //             resolve();
// // // //         } else{
// // // //             reject('Error : Something wrong')
// // // //         }
// // // //         },2000);   
// // // //     });
    

// // // // }

// // // // // createPost({title : 'post three', body:'This is post three'})
// // // // // .then(getpost).
// // // // // catch(err => console.log(err))


// // // // // USING PROMISE.ALL

// // // // const promise1 = Promise.resolve('HEY THERE');
// // // // const promise2 = 10;
// // // // const promise3 = new Promise( (resolve,reject) => {
// // // //     setTimeout(() => {
// // // //         console.log("I m timer")
// // // //         resolve();
// // // //     }, 2000);
// // // // })
// // // // const promise4 = new Promise((resolve,reject) => 
// // // //     setTimeout( resolve ,3000,"I m promise")
// // // // );

// // // // Promise.all([promise1,promise2,promise3,promise4])
// // // // .then( (values) => {
// // // //     console.log(values)
// // // // })



// // // // DELIVERABLE


// // // const user ={
// // //     username:" Karan",
// // //     LastUserActivityTime : new Date()
// // // }
// // // const posts = [
// // //     {title : "post one" , body: "this is post one"},
// // //     {title : "post two" , body: "this is post two"},

// // // ];
// // // function getpost(){
// // //     setTimeout(() =>{

// // //         let output = '';
// // //         posts.forEach((post) =>{
// // //             output += `<li>${post.title}</li>`;

// // //         });
// // //         document.body.innerHTML=output;
// // //     },1000)
// // // }

// // // function createPost(post){
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() =>{
// // //             posts.push(post)
// // //             const error = false;
// // //         if(!error){
// // //             resolve();
// // //         } else{
// // //             reject('Error : Something wrong')
// // //         }
// // //         },2000);   
// // //     });
// // // }
// // // function deletePost(){
// // //     return new Promise( (resolve,reject) => {
// // //         setTimeout(() => {
// // //             if( posts.length > 0){
// // //                 resolve(posts.pop())
// // //             }
// // //             else{
// // //                 reject("ARRAY IS EMPTY")
// // //             }
            
// // //         }, 1000);
// // //     })
// // // } 

// // // function updateLastUserActivityTime(){
// // //     return new Promise( (resolve,reject) => {
// // //         setTimeout(() => {
// // //             user.LastUserActivityTime = new Date()
// // //             resolve(user.LastUserActivityTime)

            
// // //         }, 1000);
        
// // //     })
// // // }
// // // // function helper(){
// // // //     Promise.all([createPost({title: 'Post Three', body: 'This is Post Three'}), updateLastUserActivityTime()])

// // // // }
// // // Promise.all([createPost({title: 'Post Three', body: 'This is Post Three'}), updateLastUserActivityTime()])
// // // .then( (values) =>{
// // //     console.log(values)
// // //     getpost()
// // //     deletePost().then( ()=>{
// // //         getpost()
// // //     }) 
// // // })



// // // PROMISES 

// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// const promiseFriendBringTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
        
//     }, 3000);
    
// });

// const getPopCorn = promiseFriendBringTicket.then( (t) =>{
//     console.log("here's the ticket")
//     console.log("Let's Go In ");
//     console.log("I.m hungry");
//     return new Promise((resolve, reject) => {
//         resolve(`${t} Pizza`)
//     })
// })


// const getFries = getPopCorn.then( (t) => {
//     console.log("here's the fries")
//     console.log("Let's Go In ");
//     console.log("I.m hungry and need fries");
//     return new Promise((resolve, reject) => {
//         resolve(`${t} Pizza Fries`)
//     });
// });

// const getColdDrinks = getFries.then( (t) =>{
//     console.log("I want a cold drrink")
//     return new Promise( (resolve,reject) => {
//         console.log(`Here's the ColdDrink`)
//     })
// })

// getColdDrinks.then( (t) => console.log(t))

// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');


// // USING ASYNC AWAIT


// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// const preMovie = async() => {

//     const promiseFriendBringTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');  
//     }, 3000);
//     });

//     const getPopCorn =  new Promise((resolve, reject) => resolve(`Pizza`))

//     const getFries =  new Promise((resolve, reject) => resolve(`Fries`))

//     const getColdDrinks = new Promise ( (resolve,reject) => resolve(`ColdDrinks`))

//     // let ticket
//     // try{
//     //     ticket = await promiseFriendBringTicket;

//     // } catch(e){
//     //     ticket = 'sad face';
//     // }

//     let ticket = await promiseFriendBringTicket;

//     let [PopCorn,Fries,ColdDrinks] = await Promise.all([getPopCorn,getFries,getColdDrinks])

//     console.log(`${PopCorn},${Fries},${ColdDrinks}`)


//     return ticket;
// }


// preMovie().then( (m) => console.log(`person3 : shows ${m}`));


// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');


// DELIVERABLE USING ASYNC AWAIT ON GET POST DELETE POST

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

const PostInfo = async() =>{

    // const gettingPost = await getpost()
    // console.log(gettingPost)
    // const deletePost = await deletePost()
    // console.log(deletePost)

    let output = Promise.all([createPost({title: 'Post Three', body: 'This is Post Three'}), updateLastUserActivityTime()])
    .then( (values) =>{
        console.log(values)
        getpost()
        deletePost().then( ()=>{
            getpost()
        }) 
    })
    

}

PostInfo().then()







    




