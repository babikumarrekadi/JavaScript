// for(let i=0;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.body.innerHTML+=`* `
//     }
//      document.body.innerHTML+='<br>'
// }

// let num=2
// for(let i=1;i<=20;i++){
//      document.body.innerHTML+=`${num} * ${i} = ${num*i} <br>`
// }

// for (let i = 0; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }


let animals =[
{namee:"Dog ",Desc:" IS a Good Animal",imgg:"https://i.insider.com/5c926b31d2ce78554137737e?width=600&format=jpeg&auto=webp"},
{namee:"Cat ",Desc:"IS a Good Animal ",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s"},
{namee:" Elephant",Desc:" IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWg9-eeGtzH0v1etRGRC3BAFO6x18IsHD1vQ&s"},
{namee:" Tiger",Desc:"IS a Good Animal IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFWThXQto_u0ECqT4XaYVssxSfSj8HMQWJw&s"},
{namee:" Leapoerd",Desc:" IS a Good Animal",imgg:"https://cdn.britannica.com/02/92702-120-6A02E613/Cheetah.jpg"    },
{namee:" Monkey",Desc:" IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZGIWKJxpIjDLGK54lxgRDECMPYrPPho4hQ&s"}

]
for (let i = 0; i < animals.length; i++) {
    document.body.innerHTML+=`

    <div id="card">
            <h2 style="display: flex; justify-content: center;">${animals[i].namee}</h2>
            <img src="${animals[i].imgg}" alt="Dog" >
            <p style="display: flex; justify-content: center;"><h2>Naveen Likes a Animals</h2></p>
    </div>
    
    `
    
    
}


