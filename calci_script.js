
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
      let btntext = e.target.innerText;

      if (btntext === 'AC') {
        screen.value = ''; // Clear the screen when AC is clicked
      } else if (btntext === '=') {
        try {
          screen.value = eval(screen.value); // Evaluate the expression
        } catch {
          screen.value = 'Error'; // Handle invalid expressions
        }
      } 
      else if (btntext === 'CE') {
                screen.value = screen.value.slice(0, -1); // Remove the last character
            }
            else {
        screen.value += btntext; // Add button text to the screen
      }
    });
  });
  function sin(){
    screen.value = Math.sin(screen.value);
  }
  function cos(){
    screen.value = Math.cos(screen.value);
  }
  function tan(){
    screen.value = Math.tan(screen.value);
  }
  function log(){
    screen.value = Math.log(screen.value);
  }
  function pow(){
    screen.value = Math.pow(screen.value,2);
  }
  function sqrt(){
    screen.value = Math.sqrt(screen.value);
  }
  function pi(){
    screen.value = 3.14159265359;
  }
  function e(){
    screen.value = 2.71828182846;
  }
  function fact(){
    let x= screen.value;
    if(x==0){
        screen.value = 1;
    }
    let fact =1;
    while(x>0){
        fact *= x;
        x--;
    }
    screen.value = fact;
  }