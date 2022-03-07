$(function(){
    // 入力値をリセット
    $("button.reset").click(function(){
        $('input[type="text"], input[type="password"],input[type="radio"], input[type="checkbox"], select, textarea').val("").removeAttr('checked').removeAttr('selected');
    })
});