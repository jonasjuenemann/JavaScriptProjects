const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

grandparent.addEventListener('click', e => {
    console.log(5)
}, { capture: true, once: true })

function printHi() {
    console.log('hi')
}
parent.addEventListener('click', printHi)

setTimeout(() => {
    parent.removeEventListener('click', printHi)
}, 2000)

/*Problem: Ein nachträglich mit Javascript erstelltes div mit Eventlistenern zu erfassen. Easy, wenn bei Erstellung einfach mit EL versehen, aber auch aufwendig. Besser:
 */

const divs = document.querySelectorAll('div')

document.addEventListener('click', (e) => {
    if (e.target.matches('div')) {
        console.log('hi')
    }
})

//Eleganter in eigener Funktion:

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

/*
addGlobalEventListener('click', 'div', () => {
    console.log('hi')
})
 */

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)