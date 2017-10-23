var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objBrowser = objApp.Window.CurrentDocumentBrowserObject;
var request;
var htmlText;

function runPyScript(input,cb){
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {

    var response = this.responseText;
    var r = JSON.parse(response)
    console.log(r.toHtml);
    //alert('OK2')

        if (typeof cb === 'function')
            cb(request.responseText);
  }

};

request.onerror = request_error;
request.open('POST', 'http://127.0.0.1:5000/showrst', true); 
request.setRequestHeader('Content-Type', 'text/plain');
request.send(input);
}

function request_error(){
    alert('Error with request. \n Is python server running?');
}

objBrowser.ExecuteScript("document.body.innerText", function(text) {
    runPyScript(text, function(responseText){
        //var r = JSON.parse(responseText); // responseText is the response from python
        // we do not use it here in wiz
        //alert(r.toHtml);
    });


});

