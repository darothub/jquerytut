$("document"). ready(function() {
    console.log('ready')
    $("#submit").click(function(){
        $("#username").css("background-color", "brown")
        return false
    });
});