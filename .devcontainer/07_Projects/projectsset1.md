# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 

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


## Project 2
```javascript
console.log("Welcome to Project2");
console.log("BMI Calculator");

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height === 0 || isNaN(height) || height < 0) {
    result.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight === 0 || isNaN(weight) || weight < 0) {
    result.innerHTML = 'Please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}=> Under Weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi}=> Normal Range  </span>`;
    } else {
      result.innerHTML = `<span>${bmi}=> Overweight </span>`;
    }
  }
});
```

## Project 3
```javascript
console.log("Welcome to Project 3!!")
console.log("")
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

