$(document).ready(function(){


$("h4").click(function(){

    if ($("div").hasClass("content")) {
        if ($("div").hasClass("wrapUp")) {
            $(this).siblings("div").removeClass("wrapUp")
        }
        if ($(this).siblings("div").hasClass("shown")) {
            $(this).siblings("div").removeClass("shown").addClass('content').addClass("wrapUp")
        }

        $(this).siblings("div").removeClass("content").addClass("shown")
    } else {
        $("div").removeClass("shown").addClass('content').addClass("wrapUp")
    }
})

})


// $("h4").click(function(){
//     $("div").removeClass("content").addClass("shown")
// })

// })

// if ( $content.hasClass('sr-only') ) {
//     $content.removeClass('sr-only').addClass('open');
// }
// else if ( $content.hasClass('open') ) {
//     $content.removeClass('open').addClass('sr-only');
// }