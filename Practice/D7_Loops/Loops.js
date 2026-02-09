let lang = ["tamil", "hindi", "english", "physis", "maths", "science", "social", "chemistry", "bilogy", "zoology"]

for (let i = 0; i < lang.length; i++) {

    

    document.body.innerHTML += `

        <div id="card">
        


        <table border="1" style="border-collapse: collapse;">
    <th>${lang[i].toUpperCase()}</th>
    <tr><td><img src="../Assets/download.jpeg" alt="" width="200px" height="175px"></td><br></tr>
    <tr><td>${lang[i].toUpperCase()} is a Language  </td></tr>

</table>

        </div>

    `

}