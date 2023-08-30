// get elements
const inputField1 = document.getElementsByClassName("input1")[0];
const inputField2 = document.getElementsByClassName("input1")[1];
const inputField3 = document.getElementsByClassName("input2")[0];
const inputField4 = document.getElementsByClassName("input2")[1];
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const result = document.getElementById("result");
// const eachCard = document.getElementsByClassName("card")[0];
const eachCard = document.getElementsByClassName("card");


// events
button1.addEventListener("click", triangleArea);
button2.addEventListener("click", rectangleArea);
button3.addEventListener("click", triangleArea);
button4.addEventListener("click", triangleArea);
button5.addEventListener("click", triangleArea);
button6.addEventListener("click", triangleArea);

// functions


function triangleArea(){

    const li = document.createElement("li");
    li.innerText= " Triangle:"+0.5*(inputField1.value * inputField2.value);
    li.classList.add("new-li");
    result.appendChild(li);
}

function rectangleArea(){

  let a="\u33A0";
    const li = document.createElement("li");
    li.innerText= " Rectangle:"+(inputField3.value * inputField4.value)+a;
    li.classList.add("new-li");
    result.appendChild(li);
}

function triangleArea(){

    const li = document.createElement("li");
    li.innerText= " Triangle:"+0.5*(inputField1.value * inputField2.value);
    li.classList.add("new-li");
    result.appendChild(li);
}

function triangleArea(){

    const li = document.createElement("li");
    li.innerText= " Triangle:"+0.5*(inputField1.value * inputField2.value);
    li.classList.add("new-li");
    result.appendChild(li);
}

function triangleArea(){

    const li = document.createElement("li");
    li.innerText= " Triangle:"+0.5*(inputField1.value * inputField2.value);
    li.classList.add("new-li");
    result.appendChild(li);
}

function triangleArea(){

    const li = document.createElement("li");
    li.innerText= " Triangle:"+0.5*(inputField1.value * inputField2.value);
    li.classList.add("new-li");
    result.appendChild(li);
}




// ==============================================================================================

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

// const collection = document.getElementsByClassName("example");
for (let i = 0; i < eachCard.length; i++) {
    eachCard[i].addEventListener("mouseover", function(){
        eachCard[i].style.backgroundColor = randomColor();
      });
}
  

  function fixedColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

//   eachCard.addEventListener("mouseout", function(){
//     eachCard.style.backgroundColor = "white";
//   });

  for (let i = 0; i < eachCard.length; i++) {
    eachCard[i].addEventListener("mouseout", function(){
        eachCard[i].style.backgroundColor = "white";
      });
    
}
