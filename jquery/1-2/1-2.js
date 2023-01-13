$(() => {
    $('div').css({
        backgroundColor : "red",
        width: "300px",
        height: "100px"
    })
    $('div').mouseenter(function () { $('div').css('background-color', 'blue') })
    $('div').mouseout(function () { $('div').css('background-color', 'red') })
});
