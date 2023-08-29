/* code by Aafaq Ahmad Mir */

let opcode;
let val;
let view = document.getElementById("view");
let result = document.getElementById("result");
let btn1 = document.querySelector(".btn1"); // Use querySelector instead of getElementByClassName
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let plus = document.querySelector(".btn-plus");
let minus = document.querySelector(".btn-minus");
let raised = document.querySelector(".btn-raised");
let div = document.querySelector(".btn-div");
let multiply = document.querySelector(".btn-multiply");
let mod = document.querySelector(".btn-mod");

let equals = document.querySelector(".btn-equals");
let reset = document.querySelector(".btn-reset");

btn1.addEventListener("click", () => {
    
     view.innerText += parseInt(btn1.innerText);
});
btn2.addEventListener("click", () => {
    
     view.innerText += parseInt(btn2.innerText);
});
btn3.addEventListener("click", () => {
    
     view.innerText += parseInt(btn3.innerText);
});
btn4.addEventListener("click", () => {
    
     view.innerText += parseInt(btn4.innerText);
});
btn5.addEventListener("click", () => {
    
     view.innerText += parseInt(btn5.innerText);
});
btn6.addEventListener("click", () => {
    
     view.innerText += parseInt(btn6.innerText);
});
btn7.addEventListener("click", () => {
    
     view.innerText += parseInt(btn7.innerText);
});
btn8.addEventListener("click", () => {
    
     view.innerText += parseInt(btn8.innerText);
});
btn9.addEventListener("click", () => {
    
     view.innerText += parseInt(btn9.innerText);
});
btn0.addEventListener("click", () => {
    
     view.innerText += parseInt(btn0.innerText);
});
plus.addEventListener("click", () => {
     val = view.innerText;
    
     view.innerText = `${val}+  `;

});
minus.addEventListener("click", () => {
    
    val = view.innerText;
    
     view.innerText = `${val}-  `;

});
div.addEventListener("click", () => {
    
    val = view.innerText;
    
     view.innerText = `${val}/  `;

});
raised.addEventListener("click", () => {
    
    val = view.innerText;
    
     view.innerText = `${val}**  `;
});
mod.addEventListener("click", () => {
    
     val = view.innerText;
    
     view.innerText = `${val}%  `;
});
multiply.addEventListener("click", () => {
     val = view.innerText;
    
     view.innerText = `${val}*  `;


    
});
reset.addEventListener("click",() =>{
	view.innerText ="";
})


equals.addEventListener("click", () => {
    
    result.innerText = eval(view.innerText);

     
});

const consoleLogDiv = document.getElementById("console-log");

function displayConsoleLog(message) {
    const logMessage = document.createElement("p");
    logMessage.textContent = message;
    consoleLogDiv.appendChild(logMessage);
}

// Override console.log to also display in the div
const originalConsoleLog = console.log;
console.log = function (...args) {
    originalConsoleLog(...args);
    const message = args.map(arg => String(arg)).join(" ");
    displayConsoleLog(message);
};

function lognow(){

	// Example console logs
console.log("This is where Logs will show...");

}

window.setTimeout(lognow, 2000);

