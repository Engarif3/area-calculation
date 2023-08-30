
let count = 0;

// first card

document.getElementById("button1").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("first-title").innerText;
    const firstInput = parseFloat(document.getElementById("firstCard-input1").value);
    const secondInput = parseFloat(document.getElementById("firstCard-input2").value);
    const formula1A = document.getElementById("formula1-a");
    const formula1B = document.getElementById("formula1-b");
    formula1A.innerHTML=firstInput;
    formula1B.innerHTML=secondInput;

    const area = parseFloat(0.5*(firstInput*secondInput)).toFixed(2);
    // validation 
    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
    }
    displayData(firstTitle, area);
    
  });

  // second card
  document.getElementById("button2").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("second-title").innerText;
    const firstInput = parseFloat(document.getElementById("secondCard-input1").value);
    const secondInput = parseFloat(document.getElementById("secondCard-input2").value);
    const formula2A = document.getElementById("formula2-a");
    const formula2B = document.getElementById("formula2-b");
    formula2A.innerHTML=firstInput;
    formula2B.innerHTML=secondInput;


    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
    }

    const area = parseFloat(firstInput*secondInput).toFixed(2);
    
    displayData(firstTitle, area);
    
  });
  // Third card
  document.getElementById("button3").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("third-title").innerText;
    const firstInput = parseFloat(document.getElementById("thirdCard-input1").value);
    const secondInput = parseFloat(document.getElementById("thirdCard-input2").value);
    const formula3A = document.getElementById("formula3-a");
    const formula3B = document.getElementById("formula3-b");
    formula3A.innerHTML=firstInput;
    formula3B.innerHTML=secondInput;
    
    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
    }

    const area = parseFloat(firstInput*secondInput).toFixed(2);
    
    displayData(firstTitle, area);
    
  });
  // fourth card
  document.getElementById("button4").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("fourth-title").innerText;
    const firstInput = parseFloat(document.getElementById("fourthCard-input1").value);
    const secondInput = parseFloat(document.getElementById("fourthCard-input2").value);
    const formula4A = document.getElementById("formula4-a");
    const formula4B = document.getElementById("formula4-b");
    formula4A.innerHTML=firstInput;
    formula4B.innerHTML=secondInput;

    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
    }
    const area = parseFloat(0.5*(firstInput*secondInput)).toFixed(2);
    
    displayData(firstTitle, area);
    
  });
  // fifth card
  document.getElementById("button5").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("fifth-title").innerText;
    const firstInput = parseFloat(document.getElementById("fifthCard-input1").value);
    const secondInput = parseFloat(document.getElementById("fifthCard-input2").value);
    const formula5A = document.getElementById("formula5-a");
    const formula5B = document.getElementById("formula5-b");
    formula5A.innerHTML=firstInput;
    formula5B.innerHTML=secondInput;

    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
      }

    const area = parseFloat(0.5*(firstInput*secondInput)).toFixed(2);
    
    displayData(firstTitle, area);
    
  });
  // sixth card
  document.getElementById("button6").addEventListener("click", function () {

    count++;

    // find elements
    const firstTitle = document.getElementById("sixth-title").innerText;
    const firstInput = parseFloat(document.getElementById("sixthCard-input1").value);
    const secondInput = parseFloat(document.getElementById("sixthCard-input2").value);
    const formula6A = document.getElementById("formula6-a");
    const formula6B = document.getElementById("formula6-b");
    formula6A.innerHTML=firstInput;
    formula6B.innerHTML=secondInput;
    
    
    if (
      firstInput == "" ||
      secondInput == "" ||
      firstInput <= 0 ||
      secondInput <= 0 ||
      isNaN(firstInput) || isNaN(secondInput)

    ) {
      return alert("please enter a valid number and negative number is not accepted");
    }

    const area = parseFloat(3.14*(firstInput*secondInput)).toFixed(2);
    
    displayData(firstTitle, area);
    
  });
  
  // common function for all

  // function1

  function displayData(cardTitle, calculatedArea){

    const table = document.getElementById("table-container");
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${count}</td>
    <td>${cardTitle}</td>
    <td>${calculatedArea}</td>
    <td> cm&sup2;</td> 
    <td>
    <button class="btn lowercase btn-sm bg-[#0284c7] border-none">Convert to m&sup2;</button>
    </td>
    `;

  table.appendChild(tr);
  }
  // function2
//   ===================================================================
    // random color
    // =================================================================

    const eachCard = document.getElementsByClassName("card");
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
    
    