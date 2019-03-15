document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btntxt = document.createTextNode("button");
    button.appendChild(btntxt);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert("You're Doing Great!");
    })

    let btntwo = document.getElementsByClassName("btn");
    btntwo[0].addEventListener("click", function () {//get elements by ClassNAme returns HTML collection of elements not just one so yu have to specify or give it an ID
        var textContent = document.getElementById("inputText").value;
        alert(textContent);
    });

    let div = document.getElementById("div1")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue";
        div.addEventListener("mouseout", function () {
            div.style.backgroundColor = ""
        })

    })

    let paragraph = document.createElement("P")
    let paratext = document.createTextNode("I am a paragraph with text");
    paragraph.appendChild(paratext);
    document.body.appendChild(paragraph);

    paragraph.addEventListener("click", function () {
        var colors = ["blue", "purple", "red", "gray", "orange"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        paragraph.style.color = randomColor;
    })
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