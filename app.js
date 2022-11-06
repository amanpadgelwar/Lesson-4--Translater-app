var btn1 =document.querySelector('#btn');
var inputText =document.querySelector('#inputArea');

var outputText =document.querySelector('#OutputText');

var serverUrl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"


function getTranslationUrl(text)

{
 
return serverUrl+"text="+ text

}

function clickEventHandler()

{

var textInput =inputText.value;
fetch(getTranslationUrl(textInput))
.then(Response=> Response.json)
.then(ourUrlConvertedToJson => console.log(json.contents.translation))

}
;

btn1.addEventListener("click",clickEventHandler)