
const parent = document.getElementById('parent');
console.log(parent.outerHTML);

const children = parent.children;
console.log(children);

const firstchild = parent.firstElementChild;
console.log(firstchild);

const lastchild = parent.lastElementChild;
console.log(lastchild);

const previouschild = parent.previousElementSibling;
console.log(previouschild);

const nextchild = parent.nextElementSibling;
console.log(nextchild);

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector("li");

console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2.outerHTML);

const grandParent = children2.parentElement;

console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);