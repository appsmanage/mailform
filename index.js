var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\nお問合せ内容：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `${key}\n内容：${reasons}`;
        sendText(msg);

        return false;
    });
});
