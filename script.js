 
 function changeColor(){
    const button = document.getElementById("color")
    const div = document.getElementById("container") 

    if (button && div) {
        button.addEventListener('click', () => {
          if (div.style.backgroundColor === "lightcoral") {
            div.style.backgroundColor = "lightgreen";
          } else if (div.style.backgroundColor === "lightgreen") {
            div.style.backgroundColor = "lightblue";
          } else if (div.style.backgroundColor === "lightblue") {
            div.style.backgroundColor = "lightcoral";
          } else {
            div.style.backgroundColor = "lightcoral"; //default
          }
        });
      } else {
        console.error("Elements with IDs 'color' or 'container' not found.");
      }
   
 }

 changeColor()

 function changeText(){
    const text = document.getElementById('text')

    text.addEventListener('click', () => {
        text.textContent("I dare you")
    })
 }

 changeText()