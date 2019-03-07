$("button").click(function(){//
    var name=$(".name").val();
    var have=parseInt($(".have").val());
    var want=parseInt($(".want").val());
    var add=have+want;
    var sent=("In The Year 2088 "+name+" Will Have "+add+" pets.");
    console.log(sent);
    $(".animal").text(sent);
});
