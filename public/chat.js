var myFirebase = new FireBase('https://console.firebase.google.com/u/0/project/chatlive-42101/database/chatlive-42101-default-rtdb/data/~2F')
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener("click",function(){
    var msgUser = usernameInput.value;
    var msgText = textInput.value;
    myFirebase.set(msgUser + " says: " + msgText);
    textInput.value = "";
})