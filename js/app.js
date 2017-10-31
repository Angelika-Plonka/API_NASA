$(function() {

    var url = 'https://api.nasa.gov/planetary/apod?api_key=F4kwZZhW5UBGq3ftEIIdRw1WohNzsxc1XWim75nP';
    var $section = $('#background-image');
    var imageInformation = $('.information');
    var imageDate = $('.date');
    var nextButton = $('.next_image');
    var mainContent = $('main');

    function newBackground() {

        //function for random years, months and days
        function random(min, max) {
            return result = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var year = random(2006, 2016);
        var month = random(1, 12);
        var day = random(1, 28);

        var date = year + '-' + month + '-' + day;

        // add random date to url
        var urlDate = url + '&date=' + date + '&hd=true';

        $.ajax({
            url: urlDate
        }).done(function (response) {
            var background = response.hdurl;

            nextButton.fadeTo(5000, 1);
            $section.fadeTo(5000, 1).css('background-image', 'url(' + background + ')');
            var title = response.title;
            var date = response.date;
            imageInformation.text(title);
            imageDate.text('Taken: ' + date);
        }).fail(function (error) {
            alert("Nie można połączyć się z API NASA");
        });
    }

    newBackground();

    nextButton.on('click', function () {
        $(this).fadeTo(1000, 0);
        $section.fadeTo(1000, 0.7);
        newBackground();
    });
});