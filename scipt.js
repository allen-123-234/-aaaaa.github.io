//  展開/收合按鈕
$(document).ready(function() {

    $("#collapse").on("click", function() {

        $("#sidebar").toggleClass("active");
        $(".fa-align-left").toggleClass("fa-chevron-circle-right");
    })
})