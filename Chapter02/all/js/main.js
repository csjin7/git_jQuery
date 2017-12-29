$(function(){
    //$('#typo').css('color', '#ebc000');
    //$('#typo').on('mouseover', function () {
    //    $('#typo').css('color', '#ebc000');
    //});
    //$('#typo').css('transform', 'rotate(10deg)');
    //$('.page-main > div:nth-child(1).inner').css('opacity', 0.1);
    //$('.inner').css('opacity', 0.5);

    $('#typo .inner').on('click', function () {
        $('#typo .inner').animate({
            opacity: 0,
            fontSize: '0px'
            
        }, 1500, 'swing');
    });
});