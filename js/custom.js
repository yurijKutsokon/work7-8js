$(function(){
    var $eventElems = $('a[href^=#tabs-]');
    $eventElems.click(function(eventObject){
        var str = String($(this).get());
        for(var i = 0, j = 1; i < $eventElems.size(); i++, j++ ){
            if(str[str.length-1] == j){
                $('div[id=tabs-'+ j +']').show();
                $(this).parent().css({background: '#FFFFFF'});
            }else{
                $('div[id=tabs-'+ j +']').hide();
                $('a[href^=#tabs-'+ j +']').parent().css({background: '#F1F1F1'});
            }
        }
        eventObject.preventDefault();
    });
    //form
    var $hovLab = $('.tooltips');
    var $tolText = $('.tooltiptext');
    $tolText.hide();
    $hovLab.mouseover(function () {
        $(this.children[1]).slideDown(200)
    });
    $hovLab.mouseout(function () {
        $(this.children[1]).hide();
    });
    $('.btn').click(function(){
        $tolText.show();
    });
});