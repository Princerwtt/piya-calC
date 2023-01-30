console.log('Hello!');
let button = document.getElementById('d');
button.onclick = () => {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let operation = document.getElementById('dropdown').value;
  let output = null;
  switch (operation) {
    case '+':
      output = parseInt(a) + parseInt(b);
      break;
    case '-':
      output = a - b;
      break;
    case '*':
      output = a * b;
      break;
    case '/':
      output = a / b;
      break;
  }
  document.getElementById('output').innerText = output;
};
