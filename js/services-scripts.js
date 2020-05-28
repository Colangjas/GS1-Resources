var $grocery = $('.' + grocery.id);
var $foodservice = $('.' + food.id);
var $genmerch = $('.' + gm.id);
var $healthcare = $('.' + health.id);
var $pharmacy = $('.' + pharm.id);

var $btns = $('.btn').click(function () {
    if (this.id == 'all') {
        $('#parent > div').fadeIn(450);
    } else if (this.id == 'allfr') {
        $('#parent > div').fadeIn(450);
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})
$(document).ready(function () {
    if (window.location.hash.indexOf("grocery") > -1) {
        $('#parent > div').not($grocery).hide();
        $btns.removeClass('active');
        $('#grocery').addClass('active');
    }
    else if (window.location.hash.indexOf("foodservice") > -1) {
        $('#parent > div').not($foodservice).hide();
        $btns.removeClass('active');
        $('#food').addClass('active');
    }
    else if (window.location.hash.indexOf("gm") > -1) {
        $('#parent > div').not($genmerch).hide();
        $btns.removeClass('active');
        $('#gm').addClass('active');
    }
    else if (window.location.hash.indexOf("healthcare") > -1) {
        $('#parent > div').not($healthcare).hide();
        $btns.removeClass('active');
        $('#health').addClass('active');
    }
    else if (window.location.hash.indexOf("pharmacy") > -1) {
        $('#parent > div').not($pharmacy).hide();
        $btns.removeClass('active');
        $('#pharm').addClass('active');
    }
});