// for row in range(1,6):
//     print('  '*(5-row)+'* '*((row*2)-1))


for (let i = 1; i <= 5; i++) {
    document.body.innerHTML += 
        " ".repeat(5 - i) + " * ".repeat((i * 2) - 1) + "<br>";
}


