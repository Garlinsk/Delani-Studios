$(document).ready(function() {
    $(".what-we-do .col-md-4").click(function() {
        $(this).find("img").toggle();
        $(this).find(".description").toggle();
    });

    $(".portfolio .col-md-3").mouseenter(function() {
        $(this).find(".overlay").show();
    });

    $(".portfolio .col-md-3").mouseleave(function() {
        $(this).find(".overlay").hide();
    });

    $("form").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name == "") {
            alert("please enter your name correctly");
        }else if (email == "") {
            alert("please enter your email correctly");
        }else if (message == "") {
            alert("please enter a message");
        }else {
            alert("Hi " + name + "we have received your message.Thank you for reaching out to us.")
        }
    });
});