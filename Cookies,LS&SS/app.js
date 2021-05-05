localStorage.setItem('name', 'bob');
console.log(localStorage.getItem('name'))
localStorage.setItem('name', 'john'); //update

//funktioniert "genau gleich"
sessionStorage.setItem('name', 'jonas');
console.log(sessionStorage.getItem('name'))

//Cookies -> deutlich anders
document.cookie = 'name=Kyle; expires=' + new Date(2022, 0,1).toUTCString()

document.cookie = 'lastname=Juenemann; expires=' + new Date(2022, 0,1).toUTCString()

console.log(document.cookie)