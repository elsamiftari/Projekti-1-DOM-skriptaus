$('#button').click(function () {
    $('h1').hide();
    $('h1').fadeIn(1800);
});
$('#button2').click(function () {

    $('h1').fadeOut(1800);
});
$('#button3').click(function () {
    $('#main-content').slideUp(1800);
});
$('#button4').click(function () {
    $('#main-content').hide();
    $('#main-content').slideDown(1800);
});
$('#button5').click(function () {
    $('#button5').animate({ width: "300px", fontSize: "150%" }, 5800);
    $('#button5').animate({ width: "150px", fontSize: "13.3333px" }, 5800);
});
$('#mySelect').change(function () {
    if (this.value == 'first') {
        $('#ajax').load('https://www.yahoo.com/news/rss');
    } else if (this.value == 'second') {
        $('#ajax').load('https://www.iltalehti.fi/rss/digi.xml');
    } else {
        $('#ajax').load('https://www.is.fi/rss/kotimaa.xml');
    }
});