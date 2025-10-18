$('#button').click(function () {
    $('h1').hide();
    $('h1').fadeIn(2800);
});
$('#button2').click(function () {
    $('h1').fadeOut(1800);
});
$('#button3').click(function () {
    $('#main-content').slideUp(1800);
});
$('#button4').click(function () {
    $('#main-content').hide();
    $('#main-content').slideDown(2800);
});
$('#button5').click(function () {
    $('#button5').animate({ width: "300px", fontSize: "150%" }, 2800);
    $('#button5').animate({ width: "150px", fontSize: "13.3333px" }, 3800);
});
$('#mySelect').change(function () {
    if (this.value == 'first') {
        //$('#ajax').load('https://www.yahoo.com/news/rss');

        $.ajax({
            url: 'https://www.yahoo.com/news/rss',
            type: 'GET',
            dataType: 'xml',
            success: function (data) {
                console.log(data);
                $("#ajax").empty();
                $(data).find('item').each(function () {
                    var title = $(this).find('title').text();
                    var link = $(this).find('link').text();
                    $('#ajax').append('<a href="' + link + '">' + title + '</a><br>');
                });
            }
        });

    } else if (this.value == 'second') {
        $.ajax({
            url: 'https://www.iltalehti.fi/rss/digi.xml',
            type: 'GET',
            dataType: 'xml',
            success: function (data) {
                console.log(data);
                $("#ajax").empty();
                $(data).find('item').each(function () {
                    var title = $(this).find('title').text();
                    var link = $(this).find('link').text();
                    $('#ajax').append('<a href="' + link + '">' + title + '</a><br>');
                });
            }
        });


        // $('#ajax').load('https://www.iltalehti.fi/rss/digi.xml');
    } else {
        $.ajax({
            url: 'https://www.is.fi/rss/kotimaa.xml',
            type: 'GET',
            dataType: 'xml',
            success: function (data) {
                console.log(data);
                $("#ajax").empty();
                $(data).find('item').each(function () {
                    var title = $(this).find('title').text();
                    var link = $(this).find('link').text();
                    $('#ajax').append('<a href="' + link + '">' + title + '</a><br>');
                });
            }
        });
        //$('#ajax').load('https://www.is.fi/rss/kotimaa.xml');
    }
});


