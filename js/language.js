
function checkisIE() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        return new window.ActiveXObject();
    } else {
        console.log("Failed to get Data.")
    }
}

function responseXML(xhr,filename) {
    if (xhr != null) {
        xhr.open("GET",filename,true);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 & xhr.status == 200) {
                DeparseData(xhr.responseText)
                return true
            } else {
                return false;
            }
        }
    }
}

function DeparseData(xml) {
    var b = new XMLSerializer();
    var a = b.serializeToString(xml)
    console.log(a)
}

var xhr_zhCN = checkisIE();
var xhr_enUS = checkisIE();

