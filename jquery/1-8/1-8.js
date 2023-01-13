$(function () {
    $(".st1").on("click", function () {
        $(".lorem1").slideDown()
        $(".lorem2").slideUp()
        $(".lorem3").slideUp()
    })

    $(".st2").on("click", function () {
        $(".lorem2").slideDown()
        $(".lorem1").slideUp()
        $(".lorem3").slideUp()
    })
    $(".st3").on("click", function () {
        $(".lorem3").slideDown()
        $(".lorem2").slideUp()
        $(".lorem1").slideUp()
    })
})