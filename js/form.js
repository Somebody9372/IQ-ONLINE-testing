//  На ajax затратил большую часть времени,к сожалению.В теории был с ним знаком,
// но переход к практике вызвал затруднения.
// И это был моё первое знакомсвто с jquery,что тоже вызвало трату времени.

$(function () {
    console.log('load');


    $('form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: $('form').attr('method'),
            url: $('form').attr('action'),
            data: $(this).serialize(),
            contentType: false,
            processData: false,


            success: function (response) {
                console.log(response)
                $('.form__output').text(response.value);
            }
        });

    });
});