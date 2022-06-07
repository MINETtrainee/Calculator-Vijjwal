let screen = document.getElementById('screen');// inputbox
let cmnd = document.getElementById('calc'); // = button 
buttons = document.querySelectorAll('button');
textValue = "";
for (item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        if (buttonText == "C"){
            textValue = "";
            screen.value = textValue;
            
        }
        else if(buttonText == "del"){
            textValue = screen.value.substr(0, screen.value.length - 1);
            screen.value = textValue
        }
        else if(buttonText == "="){
            screen.value = eval(textValue)
            textValue = screen.value
        }
        else if(buttonText == '^') {
            buttonText = '**';
            textValue += buttonText;
            screen.value = textValue;
        }
        else if(buttonText == 'x') {
            buttonText = '*';
            textValue += buttonText;
            screen.value = textValue;
        }
        else if(buttonText == '÷') {
            buttonText = '/';
            textValue += buttonText;
            screen.value = textValue;
        }
        else if(buttonText == "sin"){ 
        textValue = Math.sin(screen.value);
        screen.value = textValue
        }
        else if(buttonText == "√"){ 
            textValue = Math.sqrt(screen.value);
            screen.value = textValue
            }
        else if(buttonText == "cos"){
            textValue = Math.cos(screen.value);
            screen.value = textValue
        }
        else if(buttonText == "tan"){
            textValue = Math.tan(screen.value);
            screen.value = textValue
        }
        
        else if(buttonText == "log"){
            textValue = Math.log(screen.value);
            screen.value = textValue
        }
        else if(buttonText == "x²"){
            textValue = Math.pow(screen.value,2);
            screen.value = textValue
        }
        else {
            textValue += buttonText;
            screen.value = textValue;
        }
    
    })
}
