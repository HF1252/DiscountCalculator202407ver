function calculateDiscount() {
    var originalPrice = document.getElementById("originalPrice").value;
    var discount = document.getElementById("discount").value;

    // 入力が空の場合や数字以外が入力された場合のアラートチェック
    if (originalPrice === "" || discount === "" || isNaN(originalPrice) || isNaN(discount)) {
        alert("正しい数字を入力してください");
        return;
    }

    // 数値に変換
    originalPrice = parseFloat(originalPrice);
    discount = parseFloat(discount);
    
    // 割引後の価格を計算
    var discountedPrice = originalPrice * (1 - discount / 100);
    
    // 結果を表示
    //document.getElementById("result").innerHTML = "割引後の価格は " + discountedPrice.toFixed(2) + " 円です。";
    document.getElementById("result").innerHTML = "割引後の価格は " + discountedPrice + " 円です。";
}