// Copyright 2020 Sergey Berezin

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* Work-around the IE bug: document.getElemntsByName() doesn't work */
function myGetElementsByName(tag, name) {
  var tags = document.getElementsByTagName(tag);
  var res = new Array();
  var i_52;
  /* Make iteration var unique */
  for(i_52=0; i_52<tags.length; ++i_52) {
    if(tags[i_52].getAttribute('name') == name) {
      res.push(tags[i_52]);
    }
  }
  return res;
}

function updateAll() {
   var pages = parseFloat(document.getElementById('pages').value);
   if(isNaN(pages)) {
        document.getElementById("pagesNaN").style.display="inline";
   		return;
   } else {
   		document.getElementById("pagesNaN").style.display="none";
   }
   for(var i=1; i<=110; ++i) {
   		var p = Math.floor((i)*pages/110); /* new page value */
		// Correction for page 0 & 1
		if(p==0) p = 1;
		if(i==1) p = 1;
   		var objects=myGetElementsByName('span', 'p'+i.toString());
		for(var j in objects) {
			objects[j].innerHTML = p;
		}
   }
}

function initialize() {
  // Generate the core HTML
  document.getElementById('beat-sheet-calc').innerHTML =
    '<input size="4" type="text" id="pages" value="110" onkeyup="updateAll()"/> <span id="pagesNaN" style="display:none; color:#FF0000">(not a number!)</span>'
    +'pages in your script:'
    +'<ul>'
    +'	<li>Opening Image: page <span name="p1">1</span></li>'
    +'	<li>Theme Stated: page <span name="p5">5</span></li>'
    +'	<li>Set-up: pages <span name="p1">1</span>-<span name="p10">10</span></li>'
    +'	<li>Catalyst: page <span name="p12">12</span></li>'
    +'	<li>Debate: pages <span name="p12">12</span>-<span name="p25">25</span></li>'
    +'	<li>Break into Two: page <span name="p25">25</span></li>'
    +'	<li>B Story: page <span name="p30">30</span></li>'
    +'	<li>Fun and Games: pages <span name="p30">30</span>-<span name="p55">55</span></li>'
    +'	<li>Midpoint: page <span name="p55">55</span></li>'
    +'	<li>Bad Guys Close In: pages <span name="p55">55</span>-<span name="p75">75</span></li>'
    +'	<li>All Is Lost: page <span name="p75">75</span></li>'
    +'	<li>Dark Night of the Soul: pages <span name="p75">75</span>-<span name="p85">85</span></li>'
    +'	<li>Break into Three: page <span name="p85">85</span></li>'
    +'	<li>Finale: pages <span name="p85">85</span>-<span name="p110">110</span></li>'
    +'	<li>Final Image: page <span name="p110">110</span></li>'
    +'</ul>';
}


window.onload=initialize;
