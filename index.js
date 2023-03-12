$(function () {
	
    // お問い合わせフォームを表示する
    $('#form-number').click(function () {
        $('#form-name').empty();
	var number = $('input[name="number"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();
    });

    // 送信
    $('form').submit(function () {
	var number = $('input[name="number"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();
	    
        var msg = `＊＊＊お問い合わせ内容＊＊＊\n ${number}\n ${inquiries}`;
        sendText(msg);

        return false;
    });
	
    // 送信
    $('form').submit(function () {
	var msg = `ご連絡が遅れる場合がございますが、\n確認後に返信致します。`;
        sendText(msg);

        return false;
    });
});
