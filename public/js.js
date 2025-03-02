const button = document.querySelector('button');

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector(`#output`);
    greeting.textContent = `Hello, ${name} nice to meet you!`;

}

button.addEventListener('click', greet);