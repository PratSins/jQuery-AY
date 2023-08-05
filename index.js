$("h1").css("color","red");

// console.log($("h1").css("font-size"));
// console.log($("h1").css("font-size","5rem"));  // also works

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title"); // -- reverse the change
// $().hasClass() to check if the tag has a given class

$("h1").addClass("big-title color_change"); 
console.log($("h1").css("font-size"));

// $("h1").text("Bye");
// $("button").text("Bosco 3");
// $("button").text("<strong>Bosco 3</strong>"); // -- wont give u desired results
$("button").html("<strong>Bosco 3</strong>");
$("button").eq(0).text("Fuck off");


// For the jQuery cdns to load Up 
// if u are putting all the script tags in <head></head>

// $(document).ready(function() {
//     $("h1").css("color","red");
// });

//  document.querySelector("h1");    ---> $("h1");

//  document.querySelectorAll("button");    ---> $("button");


console.log($("img").attr("src"));

$("a").attr("href","https://www.youtube.com/");


$("h1").click(function(){
    $("h1").css("color","purple");
});

// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });

// for (var i = 0; i<5; i++) 
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector ("h1").style.color = "yellow";
//     });
// }
// Equivalent jQuery code

$("button").click(function(){
    $("h1").css("color", "pink");
});



$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});


// $("a").before("<button>new1</button>");
// $("a").after("<button>new2</button>");

// $("h1").append("<button>new3</button>");
// $("h1").prepend("<button>new4</button>");

// This Won't work with the above 4 lines.
$("button").eq(0).on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").fadeOut();
    // $("h1").toggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").fadeToggle();
    $("h1").slideToggle();
    // $("h1").animate({ opacity: 0.5 });
    // $("h1").slideUp().slideDown().animate({ opacity: 0.5 });

});