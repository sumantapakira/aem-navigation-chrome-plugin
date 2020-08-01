/**
 * 
 *  Copyright 2020 Sumanta Pakira
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */	

let path = location.pathname;
let classicPath; 
let touchUIPath; 
let previewPath; 
let url; 


if(path.startsWith("/editor.html/")){
	classicPath = location.href.replace("editor.html","cf#");
	url = path.substring(12);
}

if(path.startsWith("/cf")){
	touchUIPath = location.href.replace("cf#","editor.html");
	url = location.hash.substring(1);
}

if(path.endsWith("componentlist.html")){
	var frompath = getQuerystring("fromPath");
	url = frompath;
}

function getQuerystring(key) {
	var query = window.location.search.substring(1);
    var vars = query.split("=");
   return vars[1];
}

if(url){
 url = url.replace(/\.[^/.]+$/, "");
}

let hostname = location.protocol + "//" + location.hostname;
if(location.port){
	hostname = hostname + ":" + location.port
} 


chrome.runtime.sendMessage({classicUiPath: classicPath, touchUiPath: touchUIPath, url:url, hostname:hostname }, function(response) {
  console.log(response.farewell);
});