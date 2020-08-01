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
 
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.classicUiPath){
    	localStorage["classicPath"] = request.classicUiPath;
    }

    if(request.touchUiPath){
    	localStorage["touchUiPath"] = request.touchUiPath;
    }

    if(request.url){
    	localStorage["url"] = request.url;
    }

    if(request.hostname){
    	localStorage["hostname"] = request.hostname;
    }
    
      sendResponse({farewell: "ok"});
  });