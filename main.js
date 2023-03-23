const section = document.getElementById('container');
const secondSection = document.querySelector('#container');
const list = document.querySelectorAll('.second');
const ol = document.querySelector('ol'); //("ol .third")
const item = ol.querySelector('.third');
console.log(`item: ${item}`);
// section.innerText = "Hello!";
let footer = document.querySelector('.footer');
// footer.remove();
footer.classList.add('main');
footer.classList.toggle('main');//.remove
const newLi = document.createElement("li");
newLi.textContent = "four";
let newList = document.querySelector("ul");
newList.appendChild(newLi);//.append(newLi)
const li = document.querySelectorAll('ol li');
for (let i = 0; i <= li.length; i++){
    li[i].style.backgroundColor = "green";
}
