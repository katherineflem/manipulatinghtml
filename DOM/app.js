
//load page and make button appear (not already in html)
//when button is clicked, display alert box with nice message.
document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btntxt = document.createTextNode("button");
    button.appendChild(btntxt);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert("You're Doing Great!");
    })
//create button and text box (can just put into HTML).
//when button is clicked, display alert with the message type into the text box
    let btntwo = document.getElementsByClassName("btn");
    btntwo[0].addEventListener("click", function () {//get elements by ClassNAme returns HTML collection of elements not just one so yu have to specify or give it an ID
        var textContent = document.getElementById("inputText").value;
        alert(textContent);
    });
//create a div in HTML, without using CSS:hover, make div change background color when moused over
//div should return to original color when mouse exits 
    let div = document.getElementById("div1")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue";
        div.addEventListener("mouseout", function () {
            div.style.backgroundColor = ""
        })

    })
//put some text in a paragraph. 
//when you click on the paragraph, color switches to random
    let paragraph = document.createElement("P")
    let paratext = document.createTextNode("I am a paragraph with text");
    paragraph.appendChild(paratext);
    document.body.appendChild(paragraph);

    paragraph.addEventListener("click", function () {
        var colors = ["blue", "purple", "red", "gray", "orange"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        paragraph.style.color = randomColor;
    })
//add a button and empty div.
//when button clicked, add a span that contains your name to the div
    let btn3 = document.createElement("button");
    let btntxt3 = document.createTextNode("button3")
    btn3.appendChild(btntxt3);
    document.body.appendChild(btn3);
    let div2 = document.createElement("div");
    document.body.appendChild(div2);
    btn3.addEventListener("click", function () {
        let span = document.createElement("span")
        let spantxt = document.createTextNode("Katherine Fleming");
        span.appendChild(spantxt);
        div2.appendChild(span);
    })
//create button and ul in HTML. 
//create an array of 10 friends and when button clicked, add each friends name as a li to the ul
    let friends = ["KMoody", "Chandler", "Hayley", "Margaret", "Caroline", "Madeleine", "Gillian", "George", "Nick", "Marshall"]
    let btn4 = document.getElementById("btn4");

    let index = 0

    btn4.addEventListener("click", function () {
        let listitem = document.createElement("li");
        let listtext = document.createTextNode(friends[index]);
        listitem.appendChild(listtext);
        list.appendChild(listitem);
        index++;

    })
    })