//get by ID
let grandparent = document.getElementById('grandparent-id')

//get by Class, gibt Collection, kein Array!
let parents = document.getElementsByClassName('parent')
parents = Array.from(parents)

//querySelector(All)
grandparent = document.querySelector('#grandparent-id') //nimmt Css selektoren entgegen
parent = document.querySelector('.parent') //nimmt nur den ersten-
//All gibt Array wieder!
parents = document.querySelectorAll('.parent')

//Children
parents = Array.from(grandparent.children)
parents.forEach(changeColor)
parentOne = parents[0]
const children = parentOne.children
changeColor(children[0])
childOne = grandparent.querySelector('.child') // dasselbe

//navigate upward
parentOne = childOne.parentElement
grandparent = childOne.closest('.grandparent') //closest parent Element

//navigate sideways
childTwo = childOne.nextElementSibling

changeColor(grandparent)

function changeColor(element) {
    element.style.backgroundColor = '#333'
}

