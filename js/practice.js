function getRandomInt() {
    var englishNumber = ['1','2','3','4','5','6','7','8','9','10']; 
    var japanese = [ '一', '二', '三', '四', '五','六','七','八','九','十'];
    var index = Math.floor(Math.random() * englishNumber.length);
    

    var randomEnglishNumber = englishNumber[index];
    var randomJapaneseNumber = japanese[index];

    this.randomEnglishNumber = randomEnglishNumber;
  
        
    document.getElementById("japaneseNumberItSelf").value = randomJapaneseNumber;
}

function englishNumberHidden() {
    document.getElementById('numberItSelf').value = randomEnglishNumber; 
    if(randomEnglishNumber.style.display === "block") {
        randomEnglishNumber.style.display = "block";
    }else {
        randomEnglishNumber.style.display = "none";
    }
}