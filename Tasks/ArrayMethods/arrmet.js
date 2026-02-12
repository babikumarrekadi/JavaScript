

let animals = [
{id:1, namee:"Dog ",Desc:" IS a Good Animal",imgg:"https://i.insider.com/5c926b31d2ce78554137737e?width=600&format=jpeg&auto=webp"},
{id:2, namee:"Cat ",Desc:"IS a Good Animal ",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s"},
{id:3, namee:" Elephant",Desc:" IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWg9-eeGtzH0v1etRGRC3BAFO6x18IsHD1vQ&s"},
{id:4, namee:" Tiger",Desc:"IS a Good Animal IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFWThXQto_u0ECqT4XaYVssxSfSj8HMQWJw&s"},
{id:5, namee:" Leapoerd",Desc:" IS a Good Animal",imgg:"https://cdn.britannica.com/02/92702-120-6A02E613/Cheetah.jpg"}
]


let extra=[
{id:6, namee:" Monkey",Desc:" IS a Good Animal",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZGIWKJxpIjDLGK54lxgRDECMPYrPPho4hQ&s"},
{id:7, namee:" Bear",Desc:" IS a Good Animal",imgg:"https://www.thoughtco.com/thmb/ph4M6NqNshRJnAyLcwrBvYT7w0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/getty-brown-bear-56afcf215f9b58b7d01d5195.jpg"},
{id:8, namee:" Snakes",Desc:" IS a Good Animal",imgg:"https://www.saferbrand.com/media/Articles/Safer-Brand/identify-and-get-rid-of-venmous-snakes.jpg"},
{id:9, namee:" Deer",Desc:" IS a Good Animal",imgg:"https://i0.wp.com/wildlifeinwinter.com/wp-content/uploads/2020/12/IMG_2034-1.buck-in-velvet.WP.jpg?resize=1140%2C600&ssl=1"},
{id:2, namee:"Cat ",Desc:"IS a Good Animal ",imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s"}
]

// animals.push(extra[0])
// animals.pop()
// animals.unshift(extra[2])
// animals.shift()
// animals.reverse()

// animals=animals.concat(extra)

for (let i = 0; i < animals.length; i++) {
    document.body.innerHTML+=(`
    <div class="card">
        <h1>${animals[i].namee}</h1>
        <img src="${animals[i].imgg}" alt="animals images">
        <p>${animals[i].Desc}</p>
    </div>
    `)
}