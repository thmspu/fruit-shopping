// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
(function(){function h(){"complete"==document.readyState?l():setTimeout(h,100)}function l(){if(window.hasOwnProperty("localStorage")){var a=window.localStorage,b;for(b in a)a.removeItem(b)}if(window.hasOwnProperty("sessionStorage"))for(b in a=window.sessionStorage,a)a.removeItem(b);"cookie"in document&&chrome.runtime.sendMessage(JSON.stringify({id:37,v:document.URL}));m(function(){k(window.TEMPORARY,function(){k(window.PERSISTENT,function(){history.replaceState({},"",document.origin);chrome.runtime.sendMessage(JSON.stringify({id:14,
v:{url:document.URL}}))})})})}function m(a){function b(){d++;if(d<e.result.length){var g=c.deleteDatabase(e.result[d]);g.onsuccess=b;g.onerror=b;g.onblocked=b}else a()}var c=indexedDB||webkitIndexedDB;if(c){var d=-1,e=c.webkitGetDatabaseNames();e.onsuccess=b}else a()}function k(a,b){window.webkitRequestFileSystem?window.webkitRequestFileSystem(a,0,function(a){function c(a){function d(){f++;f<a.length?a[f].isDirectory?a[f].removeRecursively(d,b):a[f].remove(d,b):e.readEntries(c)}var f=-1;0<a.length?
d():b()}var e=a.root.createReader();e.readEntries(c)},b):b()}if("chrome"in window){var c=Object.getOwnPropertyDescriptor(chrome,"management");if(c){c.value={};c.configurable=!1;c.writable=!1;try{Object.defineProperty(chrome,"management",c)}catch(a){}}}h()})();
