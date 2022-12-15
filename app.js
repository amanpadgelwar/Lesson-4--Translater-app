var btn1 =document.querySelector('#btn');
var inputText =document.querySelector('#inputArea');

var outputText =document.querySelector('#OutputText');

var serverUrl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"


function getTranslationUrl(text)

{
 
return serverUrl+"?"+"text="+ text

}

function clickEventHandler()

{

var textInput =inputText.value;
fetch(getTranslationUrl(textInput))//input 
.then(Response => Response.json)//conversion to json
.then(json => console.log(json.contents.translated))//fetched from api

}
;

btn1.addEventListener("click",clickEventHandler)