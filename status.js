function bindEvent(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function cstrsizeFrame(){var e=document.getElementById("cstrframe")
e.contentWindow.postMessage("","*"),window.onmessage=function(t){if(!isNaN(t.data)){var n=parseInt(t.data)+35
e.height=n}}}var cstrload=function(){var e=document.getElementById("cstrlb"),t=document.getElementById("cstrlb2")
e&&"undefined"!=e&&"null"!=e&&void 0!=e&&null!=e&&t&&"undefined"!=t&&"null"!=t&&void 0!=t&&null!=t||alert("Please do not remove the . \n IT IS GOING TO BE HIDDEN ANYWAY.")
var n=e.firstChild.nodeValue,a=e.href,r=t.firstChild.nodeValue,d=t.href
if("Radio Online"!=n||""!=a||"Radio Broadcaster"!=r||""!=d)alert("Please do not remove the  link.\n  IT IS GOING TO BE HIDDEN ANYWAY.")
else{e.style.display="true",t.style.display="true"
var s="//www.caster.fm/widgets/em_status.php?uid="+cstruid+"&dark="+cstrdark,i=document.createElement("iframe")
i.frameBorder=0,i.width="300px",i.id="cstrframe",i.scrolling="no",i.allowtransparency="true",i.setAttribute("src",s),i.setAttribute("onload","cstrsizeFrame();"),i.setAttribute("allowtransparency","true"),document.getElementById("cstrdiv").appendChild(i)}}
bindEvent(window,"load",cstrload)
