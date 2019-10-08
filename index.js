$(".question").click(function(){
    $(this).next().toggleClass("collapse");
    $(this).children().toggleClass("converse");
})