function main() {
    // Add "big" class to grow-me paragraph
    let jason = document.getElementById("grow-me");
    jason.className = "big";
    
    // Remove the "big" class from the "shrink-me" paragraph.
    let shrink = document.getElementById("shrink-me");
    shrink.className = null;
    
    // Find all the <li>s and log their text content to the console.
    let list = document.getElementsByTagName("li");
    for (let elements of list) {
      console.log(elements.innerText);  
    }
  
    // Set the href of the link to "https://www.example.com" and update the       
    // text to say "somewhere" instead of "nowhere".
    let link = document.getElementsByClassName("link")[0];
    link.setAttribute("href", "/https://www.example.com");
    link.innerText = "somewhere";
  
    // Set the "display" CSS property of the "hide-me" paragraph to "none".
    let disappear = document.getElementById("hide-me");
    disappear.style.display = "none";
    
    // Set the "display" CSS property of the "show-me" paragraph to "block"
    let appear = document.getElementById("show-me");
    appear.style.display = "block";
  
    /* Get the text that the user enters into the "name" input box and use 
    it to set a welcome message in the <h1>, e.g., "Welcome Grant!". */
  
    let user = document.getElementById("name").value;
    document.querySelector("h1").textContent = (`Welcome ${user}!`);
    
    // log all variables to console
    console.log(link);
    console.log(jason);
    console.log(shrink);
    console.log(disappear);
    console.log(appear);
    console.log(user);
  }
  
  main();
  