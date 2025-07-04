# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 

```javaScript
console.log("Welcome to Project1!")

const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((b) => {
  console.log(b);
  b.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## Project 5
```javaScript
console.log("Welcome to Project5!!");
console.log("KeyBoard");

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```



## Project 6
```javaScript
console.log("Welcome to Project 6!!");
console.log("Backgroud Color Changer Using setInterval");

// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interavalID;
const startChangingColor = function () {
  if (!interavalID) {
    interavalID = setInterval(changeBgColor, 1000);
  }
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const startbtn = document
  .querySelector('#start')
  .addEventListener('click', startChangingColor);

const stopbtn = document
  .querySelector('#stop')
  .addEventListener('click', function () {
    clearInterval(interavalID);
    interavalID = null;
  });



```

