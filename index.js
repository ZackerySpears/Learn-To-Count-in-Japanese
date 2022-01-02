
function getRandomInt() {
    var maxNumber = 5; 
    document.getElementById("numberItSelf").value = Math.floor(Math.random() * maxNumber);

    var japanese = [ '一', '二', '三', '四', '五'];
    var randomJapaneseNum = japanese[Math.floor(Math.random()*japanese.length)];
    document.getElementById("japaneseNumberItSelf").value = randomJapaneseNum;
}




