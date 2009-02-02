// Derived from script by Kushal Dave (http://www.kushaldave.com/)
// at http://userscripts.org/scripts/show/2197
// and Mark Wilkinson (http:http://kremvax.net/firefox/)
// at http://kremvax.net/firefox/googlereadershoworiginal.user.js
//
// ==UserScript==
// @name           Google Reader v2 - show original in tab
// @namespace      http://at-aka.blogspot.com/
// @description    Shows original Reader item in new tab
// @include        http://www.google.com/reader/*
// @include        http://reader.google.com/*
// @include        https://www.google.com/reader/*
// @include        https://reader.google.com/*
// ==/UserScript==

function _gm_open_original_in_tab ()
{
  var current_entry = document.getElementById('current-entry');
  var a = current_entry.getElementsByTagName('a');
  GM_openInTab(a[0].href);
}

function GRT_key(event) {
  element = event.target;
  elementName = element.nodeName.toLowerCase();
  if (elementName == "input") {
    typing = (element.type == "text" || element.type == "password");
  } else {
    typing = (elementName == "textarea");
  }
  if (typing) return true;
  if (String.fromCharCode(event.which)=="Y" && !event.ctrlKey) {
    _gm_open_original_in_tab();
    try {
      event.preventDefault();
    } catch (e) {
    }
    return false;
  }
  return true;
}

//document.addEventListener("keypress", GRT_key, false);
document.addEventListener("keydown", GRT_key, false);
