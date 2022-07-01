import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"

const element = <h1>Andrey</h1>;
const getBody = document.querySelector('body');

getBody.addEventListener('click', (event) => {
    const { target } = event;
    target.textContent = 'Andrey Chesnokov';
     setTimeout(() => {
        target.style.color = 'red';
        target.style.fontSize = '130px';
     }, 2000);
     
     
});

reactDom.render(element, document.getElementById('root'));

