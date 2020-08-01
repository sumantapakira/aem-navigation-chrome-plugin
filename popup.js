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

  let classicSwitch = document.getElementById('classicSwitch');
  let touchSwitch = document.getElementById('touchSwitch');
  let contentTree = document.getElementById('contenttree');
  let crxde = document.getElementById('crxde');
  let webconsole = document.getElementById('webconsole');
  
let classicPath = localStorage.getItem('classicPath');
classicSwitch.href = classicPath;

let touchuiPath = localStorage.getItem('touchUiPath');
touchSwitch.href = touchuiPath;

let url = localStorage.getItem('url');
let hostname = localStorage.getItem('hostname');

contentTree.href = hostname + "/sites.html" + url;

crxde.href = hostname + "/crx/de/index.jsp#" + url;

webconsole.href = hostname + "/system/console/configMgr";


