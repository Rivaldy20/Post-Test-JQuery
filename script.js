$(document).ready(function() {
    //contoh 1 dimulai
    $('.satu button').click(function() {
        $('.satu p').hide();
    });
    //contoh 1 selesai

    //contoh 2 dimulai
    $('.dua button').click(function() {
        $('#test').hide();
    });
    //contoh 2 selesai

    //contoh 3 dimulai
    $('.tiga input').focus(function() {
        $(this).css("background-color", "yellow");
    });
    $('.tiga input').blur(function() {
        $(this).css("background-color", "green");
    });
    //contoh 3 selesai

    //contoh 4 dimulai
    $('.empat #hide').click(function() {
        $(".empat p").hide();
    });
    $('.empat #show').click(function() {
        $(".empat p").show();
    });
    //contoh 4 selesai

    //contoh 5 dimulai
    $('.lima button').click(function() {
        $(".lima p").toggle();
    });
    //contoh 5 selesai

    //contoh 6 dimulai
    $('#flip').click(function() {
        $("#panel").slideToggle("slow");
    });
    //contoh 6 selesai

    //contoh 7 dimulai
    $('.tujuh button').click(function() {
        alert("Value : " + $(".tujuh #test").val());
    });
    //contoh 7 selesai

    //contoh 8 dimulai
    $('.delapan #tombol1').click(function() {
        $(".delapan #cth1").text("Aku Contoh teks yang pertama");
    });
    $('.delapan #tombol2').click(function() {
        $(".delapan #cth2").html("<b>Aku Contoh teks yang kedua</b>");
    });
    $('.delapan #tombol3').click(function() {
        $(".delapan #cth3").val("Aku Contoh teks yang ketiga");
    });
    //contoh 8 selesai
});