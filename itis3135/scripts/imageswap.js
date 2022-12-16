$('#rings').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/rings.jpg");
            $("#caption").html("My rings");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});

$('#af1').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/airforces.jpg");
            $("#caption").html("Air Force 1's");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});

$('#dunks').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/pandadunks.jpg");
            $("#caption").html("Panda Dunks");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});

$('#overshirt').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/blueovershirt.jpg");
            $("#caption").html("A blue overshirt");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});

$('#fit').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/daily.jpg");
            $("#caption").html("My Daily Outfit");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});

$('#closet').on({
    'click': function(){
        $("#current, #caption").fadeOut("slow", function() {
            $('#current').attr('src', "../itis3135/hobby/images/closet.jpg");
            $("#caption").html("My Closet");
            $("#current, #caption").fadeIn("slow");
        });             
    }
});