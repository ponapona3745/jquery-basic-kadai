$(function(){
    // クリックでイベントが発生する
    $('.btn').on('click', function(){
        // フォーム内に文字を表示させる
        $('.text-box').val('クリックされました！');
    });
});