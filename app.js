var btn1 =document.querySelector("#btn");
var inputText =document.querySelector("#inputArea");

var outputText =document.querySelector("#OutputText");

//var serverUrl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"
var serverUrl ="https://api.funtranslations.com/translate/valspeak.json"

function getTranslationUrl(text)

{
 
return serverUrl+"?"+"text="+ text

}

function errorHandler(error)
{
console.log("error occured! ",error);
alert("error occured!Please try again after some time")
}
function clickEventHandler()

{

var textInput =inputText.value;
fetch(getTranslationUrl(textInput))//input 
.then(Response => Response.json)//conversion to json
.then(json => {

    var translatedText =json.contents.translated;
outputDiv.innerText =translatedText;




})//fetched from api
.catch(errorHandler)
}
;

btn1.addEventListener("onclick",clickEventHandler)