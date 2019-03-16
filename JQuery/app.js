$("document").ready(function () {
    let button1 = $("<button>button1</button>")
    button1.appendTo("body");
    button1.click(function () {
        alert("You're Doing Great!")
    })
    //create button and text box (can just put into HTML).
    //when button is clicked, display alert with the message type into the text box
    $("#btn2").click(function () {
        let message = $("#textbox").val();
        alert(message);
    })
    //create a div in HTML, without using CSS:hover, make div change background color when moused over
    //div should return to original color when mouse exits 
    $("#div1").css("height", "100px");
    $("#div1").mouseover(function () {
        $("#div1").css("background-color", "blue");
    })
    $("#div1").mouseout(function () {
        $("#div1").css("background-color", "");
    })

    //put some text in a paragraph. 
    //when you click on the paragraph, color switches to random
    let para = $("<p> I am a paragraph </p>").appendTo("body")
    para.click(function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        var random = "rgb(" + r + "," + g + "," + b + ")";
        para.css("color", random);
    })
    //add a button and empty div.
    //when button clicked, add a span that contains your name to the div
    let button3 = $("<button>button3</button>").appendTo("body");
    let div2 = $("<div></div>").appendTo("body");
    button3.click(function () {
        div2.append($("<span></span>").text("Katherine Fleming").appendTo("body"));
    })
    //create button and ul in HTML. 
    //create an array of 10 friends and when button clicked, add each friends name as a li to the ul
    let friends = ["KMoody", "Chandler", "Hayley", "Margaret", "Caroline", "Madeleine", "Gillian", "George", "Nick", "Marshall"]
    let index = 0;
    $("#btn4").click(function () {
        $("<li></li>").text(friends[index]).appendTo("ul");
        index++;
    })


});