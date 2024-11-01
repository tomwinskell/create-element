const container = document.querySelector('div');

const paragraph = document.createElement('h1');

paragraph.textContent = 'Hello world!';

container.appendChild(paragraph);

paragraph.style.color = 'purple';

container.setAttribute('class', 'center');