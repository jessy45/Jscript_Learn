$(function(){
    $('#paragraphe').html('Javascript Revision');
});
// $(function(){
//     $('body').length;
// });
// $('.rouge').css('background','yellow');
// $('#paragraphe').css('color', 'green');

$(function(){
    $('img').each(function(index){
        this.src = 'images2/i' + (index+1) + '.jpg';
    });
});
var lis = $('li').get();
console.log(lis[1].innerHTML);
(function(){
    var test = $('a').attr('href');
    document.write('test');
});
$(function(){
    $('#paragraphe').removeClass('rouges').addClass('vert');
});