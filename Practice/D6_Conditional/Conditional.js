// Task 1
let msg=prompt('Enter your Tweet')
if (msg.length>0 && msg.length<25) {
    alert("Your tweet is less than 25 characters. You have to tweet more than 25 characters")    
}else if (msg.length>=25 && msg.length<=50) {
    alert("Your tweet is between 25 to 50 characters, Thats great ")    
}else if (msg.length>50) {
    alert("Sorry your unable to type. Your are eccess your limit more than 50 character")
}else{
    alert("Please Type Somthing")
}

// Task 2
  let chat=prompt("Enter your Name")
  let a=chat.slice(0,1)
  let b=chat.slice(1,chat.length)
  alert(a.toUpperCase()+b.toLowerCase())





  



