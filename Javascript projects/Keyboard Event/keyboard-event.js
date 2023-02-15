var key1 = document.getElementById('key1');
var key2 = document.getElementById('key2');
var key3 = document.getElementById('key3');
var key4 = document.getElementById('key4');
var key5 = document.getElementById('key5');
var key6 = document.getElementById('key6');
var key7 = document.getElementById('key7');
var key8 = document.getElementById('key8');
var key9 = document.getElementById('key9');

key1.addEventListener('click', play());

function play(){
    var audio = new Audio('C:\Users\HP\Desktop\coffee project\Javascript projects\Keyboard Event\Keyboard-event Media file\clap.wav');
    audio.play();
}

var repeatInput = ""
document.body.addEventListener('keypress', function(x){
    if(x.keyCode === 97){
        key1.style.animation = 'pulse 0.5s ease-in 1'
        play();
        // repeatInput = x.keyCode

        // x.keyCode.value =""
        // repeatInput = ""
    }
});