const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
});

//greeting message 


const now = new Date();
const hour = now.getHours();

let greeting;

if (hour < 12) {
  greeting = 'Good morning!';
} else if (hour < 18) {
  greeting = 'Good afternoon!';
} else {
  greeting = 'Good evening!';
}

alert(greeting);


// that adds two numbers together and displays the result 
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
