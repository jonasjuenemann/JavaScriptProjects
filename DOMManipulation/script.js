const body = document.body;

//Adding to DOM
body.append('Hello World', ' Hiho'); //vs appendChild -> kann nur html elemente nehmen, und nur eins

//creating Element
const div = document.createElement('div')
// div.innerText = 'Hey Hey'
//div.textContent = 'Hey Hey'; //in der Benutzung mehr oder weniger gleich, aber im Detail leicht unterschiedlich. innerText zeigt nur 'visible' Parts an (also kein display none)
div.innerHTML = '<strong>Hey Hey Hey</strong>'; //erlaubt Html auf der Seite. Hat aber massive Sicherheitsimplikationen
/*
const strong = document.createElement('strong')
strong.innerText = 'Hey Hey Hey'
div.append(strong)
-> Sicherheitstechnisch deutlich besser
 */
//noch nicht hinzugefügt.
body.appendChild(div);

//Remove Element
//const hey = document.querySelector('#hey')
//hey.remove()
div.remove();

//wird wieder hinzugefügt
body.appendChild(div);

//Element Attributes
//hey.id == hey.getAttribute('id') -> vor allem sinnvoll, wenn
div.setAttribute('id', 'asdasd')
//div.id = 'asdasd' -> gleich
div.removeAttribute('id')
//data-Attributes -> wie normale Attribute, aber mit data vorne
div.setAttribute('data-test', 'test')

console.log(div.dataset, div.dataset.test);
div.dataset.hi = 'hi'

//Classes
div.classList.add('new-class', 'sec-class')
div.classList.remove('new-class')
div.classList.toggle('take-care')

//Style
div.style.color = 'red'