(()=>{"use strict";var n={597:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"* {\n    font-family: sans-serif;\n    margin: 0px;\n    padding: 0px;\n}\n\n:root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n\n    background-color: #444;\n    color: white;\n    \n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 4fr 1fr / 1fr .4fr 1fr;\n    height: 93vh;\n    width: 93vw;\n    \n}\n\n#title {\n    grid-area: 1 / 1 / 2 / 4;\n    font-size: 3rem;\n    justify-self: start;\n}\n\n#current-player {\n    grid-area: 2 / 1 / 3 / 4;\n    font-size: 2rem;\n    justify-self: center;\n}\n\n#change-turn-button {\n    grid-area: 4 / 1 / 5 / 4;\n    height: 50%;\n    width: 30%;\n    justify-self: center;\n    align-self: center;\n    font-size: 2rem;\n    background-color: rgba(0, 255, 255, 0.506);\n    color: white;\n    border: none;\n}\n#change-turn-button:hover {\n    background-color: rgba(0, 255, 255, 0.191);\n}\n#change-turn-button:active {\n    background-color: rgba(0, 255, 255, 0.136);\n}\n\n#current-player-game-board-display,#other-player-game-board-display {\n    display: flex;\n    flex-flow: row wrap;\n    height: 100%;\n    width: 100%;\n    background-color:rgb(0,200,255);\n    grid-area: 1 / 2 / 2 / 3;\n}\n#current-player-game-board-outer, #other-player-game-board-outer {\n    display: grid;\n    grid-template: 1fr 2rem / 2rem 1fr;\n}\n#current-player-game-board-outer {\n    grid-area: 3 / 1 / 4 / 2;\n}\n#other-player-game-board-outer {\n    grid-area: 3 / 3 / 4 / 4;\n}\n#vertical-numbering-current,\n#horizontal-numbering-current,\n#horizontal-numbering-placement,\n#vertical-numbering-placement {\n    background-color:rgb(0,200,255);\n}\n\n#horizontal-numbering-other,#vertical-numbering-other {\n    background-color:rgb(0,175,255); \n}\n\n#vertical-numbering-current, #vertical-numbering-other,\n#vertical-numbering-placement {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#horizontal-numbering-current, #horizontal-numbering-other,\n#horizontal-numbering-placement {\n    grid-area: 2 / 2 / 3 / 3;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#current-start-block,\n#placement-start-block {\n    grid-area: 2 / 1 / 3 / 2;\n    background-color:rgb(0,175,255); \n}\n#other-start-block {\n    grid-area: 2 / 1 / 3 / 2;\n    background-color:rgb(0,200,255);\n}\n\n\n#current-player-game-board-display {\n    grid-area: 1 / 2 / 2 / 3;\n    display:flex;\n    justify-content: space-around;\n    align-content: space-around;\n    background-color: rgb(0,200,255);\n    \n}\n#other-player-game-board-display {\n    grid-area: 1 / 2 / 2 / 3;\n    display:flex;\n    justify-content: space-around;\n    align-content: space-around;\n    background-color: rgb(0,175,255);\n}\n\n\n\n#game-board-location {\n    height: 9.3%;\n    width: 9.3%;\n}\n\n#game-board-location.none {\n    background-color:rgb(0,175,255);\n}\n#game-board-location.noneOther {\n    background-color: rgb(0,200,255);\n}\n#game-board-location.noneOther:hover {\n    background-color: rgba(0, 200, 255, 0.4);\n}\n#game-board-location.missed {\n    background-color:rgb(0, 94, 138);\n}\n#game-board-location.ship {\n    background-color:rgb(107, 0, 0);\n}\n\n#game-board-location.hit {\n    background-color:red;\n}\n#game-board-location.sunk {\n    background-color:rgba(107, 0, 0, 0.548);\n}\n#vs-computer, #vs-player {\n    font-size: 4rem;\n    border: none;\n    color: rgb(255,255,255);\n}\n#vs-computer {\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: rgba(0, 200, 255, 0.7);\n}\n#vs-computer:hover {\n    background-color: rgba(0, 200, 255, 0.5);\n}\n#vs-computer:active {\n    background-color: rgba(0, 200, 255, 0.3);\n}\n\n#vs-player {\n    grid-area: 2 / 3 / 3 / 4;\n    background-color:rgba(0,175,255, .7);\n}\n\n#vs-player:hover {\n    background-color:rgba(0,175,255, .5);\n}\n\n#vs-player:active {\n    background-color:rgba(0,175,255, .3);\n}\n\n#ship-placement-screen {\n    grid-area: 2 / 1 / 5 / 4;\n    display: grid;\n    grid-template: 3rem 1fr 3rem / 1fr 1fr 1fr;\n    height: 100%;\n    width: 100%;\n}\n\n#ship-placement-buttons {\n    grid-area: 3 / 1 / 4 / 4;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    justify-self: center;\n    align-self: center;\n}\n#done-placing-button {\n    height: 100%;\n    width: 20%;\n    font-size: 2rem;\n    border: none;\n    background-color: rgba(0, 175, 255, 1);\n}\n#done-placing-button:hover {\n    background-color: rgba(0, 200, 255, 0.8);\n}\n#done-placing-button:active {\n    background-color: rgba(0, 200, 255, 0.5);\n}\n#reset-placing-button {\n    height: 100%;\n    width: 20%;\n    font-size: 2rem;\n    border: none;\n    background-color: rgba(0, 150, 255, 1);\n}\n#reset-placing-button:hover {\n    background-color: rgba(0, 150, 255, 0.8);\n}\n#reset-placing-button:active {\n    background-color: rgba(0, 150, 255, 0.5);\n}\n\n#player-title-ship-placement {\n    grid-area: 1 / 1 / 2 / 4;\n    justify-self: center;\n    align-self: center;\n    font-size: 2rem;\n    height: 100%;\n}\n\n#ship-placement-container {\n    grid-area: 2 / 1 / 3 / 4;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n}\n\n#placement-game-board {\n    grid-area: 1 / 1 / 2 / 2;\n    display: grid;\n    grid-template: 1fr 2rem / 2rem 1fr;\n}\n\n#locations {\n    grid-area: 1 / 2 / 2 / 3;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    align-content: space-around;\n\n    height: 100%;\n    width: 100%;\n    background-color:rgb(0,200,255);\n}\n\n#player-ships {\n    grid-area: 1 / 2 / 2 / 3;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template: 1fr 2rem / 2rem 1fr;\n}\n\n#player-ships-container {\n    grid-area: 1 / 2 / 2 / 3;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    column-gap: 1rem;\n}\n\n#carrier, #battleship, #cruiser, #submarine, #destroyer {\n    background-color:rgb(107, 0, 0);\n    position: fixed;\n    \n}\n#carrier:hover, #battleship:hover, #cruiser:hover, #submarine:hover, #destroyer:hover {\n    background-color:rgba(107, 0, 0, .75);\n}\n\n#carrier {\n    height: 29%;\n    width: 2%; \n}\n#carrier.rotate {\n    width: 20%;\n    height: 3.3%; \n}\n\n#battleship {\n    height: 22.7%;\n    width: 2%; \n}\n#battleship.rotate {\n    width: 15.7%;\n    height: 3.3%;\n}\n\n#cruiser {\n    height: 16.44%;\n    width: 2%;  \n}\n#cruiser.rotate {\n    width: 10.4%;\n    height: 3.3%;\n}\n\n#submarine {\n    height: 16.44%;\n    width: 2%; \n}\n#submarine.rotate {\n    width: 10.4%;\n    height: 3.3%; \n}\n\n#destroyer {\n    height: 10.14%;\n    width: 2%; \n}\n#destroyer.rotate {\n    width: 6.1%;\n    height: 3.3%;\n}\n\n/*\n#carrier {\n    height: 31%;\n    width: 4%; \n}\n#carrier.rotate {\n    width: 31%;\n    height: 4%;\n}\n\n#battleship {\n    height: 24.7%;\n    width: 4%;\n}\n#battleship.rotate {\n    width: 24.7%;\n    height: 4%;\n}\n\n#cruiser {\n    height: 18.44%;\n    width: 4%;\n}\n#cruiser.rotate {\n    width: 18.44%;\n    height: 4%;\n}\n\n#submarine {\n    height: 18.44%;\n    width: 4%;\n}\n#submarine.rotate {\n    width: 18.44%;\n    height: 4%;\n}\n\n#destroyer {\n    height: 12.14%;\n    width: 4%;\n}\n#destroyer.rotate {\n    width: 12.14%;\n    height: 4%;\n}\n*/",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var g=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),h=t(597),g={};function f(n,e){for(const t of n)if(t[0]===e[0]&&t[1]===e[1])return!0;return!1}function m(n){for(let e=0;e<n.length;e++)for(let t=e+1;t<n.length;t++)if(n[e][0]===n[t][0]&&n[e][1]===n[t][1])return!0;return!1}function b(n,e){const t=document.querySelector("#current-player-game-board-display"),r=document.querySelector("#other-player-game-board-display");t.innerHTML="",r.innerHTML="",function(n){const e=document.querySelector("#current-player"),t=n.name;e.textContent=t}(n),function(n,e){const t=n.playerGameBoard.board;for(let r=0;r<10;r++)for(let o=0;o<10;o++){const a=o,i=9-r;"none"===t[i][a]?e.innerHTML+=`<div id="game-board-location" class="none ${i}${a}"></div>`:"missed"===t[i][o]?e.innerHTML+=`<div id="game-board-location" class="missed ${i}${a}"></div>`:f(n.playerGameBoard.attackedLocations,[i,a])?t[i][a].hits>=t[i][a].length?e.innerHTML+=`<div id="game-board-location" class="sunk ${i}${a}"></div>`:e.innerHTML+=`<div id="game-board-location" class="hit ${i}${a}"></div>`:e.innerHTML+=`<div id="game-board-location" class="ship ${i}${a}"></div>`}}(n,t),function(n,e){const t=n.playerGameBoard.board;for(let r=0;r<10;r++)for(let o=0;o<10;o++){const a=9-r,i=o;"missed"===t[a][i]?e.innerHTML+=`<div id="game-board-location" class="missed ${a}${i}"></div>`:f(n.playerGameBoard.attackedLocations,[a,o])?t[a][i].hits>=t[a][i].length?e.innerHTML+=`<div id="game-board-location" class="sunk ${a}${i}"></div>`:e.innerHTML+=`<div id="game-board-location" class="hit ${a}${i}"></div>`:e.innerHTML+=`<div id="game-board-location" class="noneOther ${a}${i}"></div>`}}(e,r)}g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v='<h1 id="title">BattleShip</h1>';function y(){document.querySelector("body").innerHTML=v+'<h2 id="current-player">Current Player</h2>\n<div id="current-player-game-board-outer">\n    <div id="current-start-block"></div>\n    <div id="horizontal-numbering-current">\n        <p>0</p>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n        <p>4</p>\n        <p>5</p>\n        <p>6</p>\n        <p>7</p>\n        <p>8</p>\n        <p>9</p>\n    </div>\n    <div id="vertical-numbering-current">\n    <p>9</p>\n    <p>8</p>\n    <p>7</p>\n    <p>6</p>\n    <p>5</p>\n    <p>4</p>\n    <p>3</p>\n    <p>2</p>\n    <p>1</p>\n    <p>0</p>\n    </div>\n    <div id="current-player-game-board-display"></div>\n</div>\n<div id="other-player-game-board-outer">\n    <div id="other-start-block"></div>\n    <div id="horizontal-numbering-other">\n        <p>0</p>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n        <p>4</p>\n        <p>5</p>\n        <p>6</p>\n        <p>7</p>\n        <p>8</p>\n        <p>9</p>\n    </div>\n    <div id="vertical-numbering-other">\n        <p>9</p>\n        <p>8</p>\n        <p>7</p>\n        <p>6</p>\n        <p>5</p>\n        <p>4</p>\n        <p>3</p>\n        <p>2</p>\n        <p>1</p>\n        <p>0</p>\n    </div>\n    <div id="other-player-game-board-display"></div>\n</div>\n\n<button id="change-turn-button"></button>'}function w(n){const e=document.querySelector("#current-player");if("draw"===n)return void(e.textContent="Draw");const t=n.name;e.textContent=`${t} Wins`}let k=!0;function L(n,e){const t=e.playerGameBoard.allSunk(),r=n.playerGameBoard.allSunk();t&&w(n),r&&w(e),t&&r&&w(!0),(t||r)&&(k=!1)}const x=[];for(let n=0;n<10;n++)for(let e=0;e<10;e++)x.push([n,e]);function S(n,e){const t=document.querySelector("#change-turn-button");function r(){t.textContent="",t.disabled=!0,t.style.height=".001px"}r();let o=!1,a=!0;b(n,e),document.querySelector("#other-player-game-board-display").addEventListener("click",(async r=>{if("game-board-location"===r.target.id&&!1===o&&!0===k){const i=+r.target.classList[1].split("")[0],c=+r.target.classList[1].split("")[1];a?f(e.playerGameBoard.attackedLocations,[i,c])||(n.sendAttack(e,[i,c]),b(n,e)):f(n.playerGameBoard.attackedLocations,[i,c])||(e.sendAttack(n,[i,c]),b(e,n)),o=!0,L(n,e),k&&new Promise((n=>{setTimeout((()=>{!function(){const n=document.querySelectorAll("#current-player-game-board-display > div"),e=document.querySelectorAll("#other-player-game-board-display > div");for(const e of n)e.style.backgroundColor="rgb(0,175,255)";for(const n of e)n.style.backgroundColor="rgb(0,200,255)"}(),n()}),1e3)})).then((()=>{t.textContent="Change Turn",t.disabled=!1,t.style.height="50%"}))}})),t.addEventListener("click",(()=>{a?(a=!1,b(e,n)):(a=!0,b(n,e)),o=!1,r()}))}!function(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}}(x);const $=class{constructor(){this.board=[],this.shipsOnBoard=[],this.attackedLocations=[],this.createBoard()}createBoard(){const n=[10,10];for(let e=0;e<n[0];e++){this.board.push([]);for(let t=0;t<n[1];t++)this.board[e].push("none")}}placeShip(n,e){this.shipsOnBoard.push(n);const t=this.shipsOnBoard.length-1;for(const n of e)this.board[n[0]][n[1]]=this.shipsOnBoard[t]}receiveAttack(n){(function(n,e){for(const t of n)if(t[0]===e[0]&&t[1]===e[1])return!0;return!1})(this.attackedLocations,n)||("none"!==this.board[n[0]][n[1]]?this.board[n[0]][n[1]].hit():this.board[n[0]][n[1]]="missed",this.attackedLocations.push(n))}allSunk(){for(const n of this.shipsOnBoard)if(n.hits<n.length)return!1;return!0}},B=class{constructor(n){this.name=n,this.playerGameBoard=new $}sendAttack(n,e){n.playerGameBoard.receiveAttack(e)}},M=class{constructor(n,e){this.name=n,this.length=e,this.hits=0}hit(){this.hits++}isSunk(){return this.hits>=this.length}};function T(n){return new Promise((e=>{var t;t=n.name,document.querySelector("body").innerHTML=v+function(n){return`<div id="ship-placement-screen">\n    <h2 id="player-title-ship-placement">${n} Placement</h2>\n    \n    <div id="ship-placement-container">\n        <div id="placement-game-board">\n            <div id="placement-start-block"></div>\n            <div id="horizontal-numbering-placement">\n                <p>0</p>\n                <p>1</p>\n                <p>2</p>\n                <p>3</p>\n                <p>4</p>\n                <p>5</p>\n                <p>6</p>\n                <p>7</p>\n                <p>8</p>\n                <p>9</p>\n            </div>\n            <div id="vertical-numbering-placement">\n            <p>9</p>\n            <p>8</p>\n            <p>7</p>\n            <p>6</p>\n            <p>5</p>\n            <p>4</p>\n            <p>3</p>\n            <p>2</p>\n            <p>1</p>\n            <p>0</p>\n            </div>\n    \n            <div id="locations"></div>\n        </div>\n        <div id="player-ships">\n            <div id="player-ships-container">\n                <div id="carrier"></div>\n                <div id="battleship"></div>\n                <div id="cruiser"></div>    \n                <div id="submarine"></div>\n                <div id="destroyer"></div>\n            </div>\n        </div>\n    </div>\n    \n    <div id="ship-placement-buttons">\n        <button id="reset-placing-button">Reset</button>\n        <button id="done-placing-button">Done</button>\n        \n    </div>\n    \n    </div>`}(t);const r=document.querySelector("#done-placing-button"),o=document.querySelector("#reset-placing-button"),a=new M(`${n.name}'s Carrier(5)`,5),i=new M(`${n.name}'s Battleship(4)`,4),c=new M(`${n.name}'s Cruiser(3)`,3),s=new M(`${n.name}'s Submarine(3)`,3),d=new M(`${n.name}'s Destroyer(2)`,2);!function(){const n=document.querySelector("#locations");for(let e=0;e<10;e++)for(let t=0;t<10;t++){const r=t,o=9-e;n.innerHTML+=`<div id="game-board-location" class="none ${o}${r}"></div>`}}(),document.querySelector("#locations").addEventListener("click",(n=>{if("game-board-location"===n.target.id){const e=+n.target.classList[1].split("")[0],t=+n.target.classList[1].split("")[1];console.log(e,t)}}));const l=document.querySelectorAll("#player-ships-container > div"),p=window.innerWidth/2,u=[[0,0,p+30,.2315*window.innerHeight],[0,0,p+120,.2315*window.innerHeight],[0,0,p+210,.2315*window.innerHeight],[0,0,p+30,.6315*window.innerHeight],[0,0,p+120,.6315*window.innerHeight]],h=[[0,0,p+30,.2315*window.innerHeight],[0,0,p+120,.2315*window.innerHeight],[0,0,p+210,.2315*window.innerHeight],[0,0,p+30,.6315*window.innerHeight],[0,0,p+120,.6315*window.innerHeight]];function g(n){switch(n){case"carrier":return 4;case"battleship":return 3;case"cruiser":return 2;case"submarine":return 1;default:return 0}}function f(n){switch(n){case"carrier":return 5;case"battleship":return 4;case"cruiser":case"submarine":return 3;default:return 2}}let b=!0;const y=0,w=1,k=2,L=3;function x(n){const{target:e}=n,t=g(n.target.id);b=!1,h[t][y]=h[t][k]-n.clientX,h[t][w]=h[t][L]-n.clientY,h[t][k]=n.clientX,h[t][L]=n.clientY,e.style.top=e.offsetTop-h[t][w]+"px",e.style.left=e.offsetLeft-h[t][y]+"px"}function S(){b=!0,document.removeEventListener("mousemove",x)}function $(n){const e=g(n.target.id);h[e][k]=n.clientX,h[e][L]=n.clientY,document.addEventListener("mousemove",x),document.addEventListener("mouseup",S)}let B=0;for(const n of l)n.style.top=`${h[B][L]}px`,n.style.left=`${h[B][k]}px`,B++,n.addEventListener("mousedown",$);for(const n of l)n.addEventListener("mouseup",(n=>{if(b){const{target:e}=n;e.classList.contains("rotate")?e.classList.remove("rotate"):e.classList.add("rotate")}}));const T=document.querySelectorAll("#locations > div");function C(){for(const n of l){const e=4-g(n.id);n.style.top=`${u[e][L]}px`,n.style.left=`${u[e][k]}px`}}function H(n,e,t){const r=[];if(e)for(const e of T){const t=e.getBoundingClientRect(),o=t.right-t.left,a=n.left<t.left+o&&n.right>t.right-o,i=n.top>t.top&&n.bottom<t.bottom;a&&i&&r.push([e.classList[1][0],e.classList[1][1]])}else for(const e of T){const t=e.getBoundingClientRect(),o=t.bottom-t.top,a=n.left>t.left&&n.right<t.right,i=n.top<t.top+o&&n.bottom>t.bottom-o;a&&i&&r.push([e.classList[1][0],e.classList[1][1]])}if(r.length<t)return!1;r.length>t&&r.pop();let o=!0,a=!0;const i=r[0][0],c=r[0][1];for(const n of r)n[0]!==i&&(o=!1);for(const n of r)n[1]!==c&&(a=!1);return!(!o&&!a)&&r}r.addEventListener("click",(()=>{let t=!0;const r=[];for(const n of l){const e=H(n.getBoundingClientRect(),n.classList.contains("rotate"),f(n.id)),o=4-g(n.id);!1===e?(n.style.top=`${u[o][L]}px`,n.style.left=`${u[o][k]}px`,t=!1):r.push(e)}t&&(!0===m(r.flat())?C():(n.playerGameBoard.placeShip(a,r[0]),n.playerGameBoard.placeShip(i,r[1]),n.playerGameBoard.placeShip(c,r[2]),n.playerGameBoard.placeShip(s,r[3]),n.playerGameBoard.placeShip(d,r[4]),e()))})),o.addEventListener("click",C)}))}!async function(){const n=new B("Player One"),e=new B("Player Two"),t=await new Promise((n=>{document.querySelector("body").innerHTML=v+'\n<button id="vs-computer">Computer</button>\n<button id="vs-player">Two Player</button>\n';const e=document.querySelector("#vs-computer"),t=document.querySelector("#vs-player");e.addEventListener("click",(()=>{n(!1)})),t.addEventListener("click",(()=>{n(!0)}))}));await T(n),t?(await T(e),y(),setTimeout(S,2e3,n,e)):(e.name="Computer",function(n){const e=new M(`${n.name}'s Carrier(5)`,5),t=new M(`${n.name}'s Battleship(4)`,4),r=new M(`${n.name}'s Cruiser(3)`,3),o=new M(`${n.name}'s Submarine(3)`,3),a=new M(`${n.name}'s Destroyer(2)`,2),i=function(){const n=[],e=[5,4,3,3,2];let t=!1;for(const r of e){let e=[];t=100*Math.random()>50;let o=!1;if(t)for(;!1===o;){const t=Math.floor(10*Math.random()),a=Math.floor(6*Math.random())+4;for(let n=0;n<r;n++)e.push([a-n,t]);const i=[...n];i.push(e),m(i.flat())?e=[]:o=!0}else for(;!1===o;){const t=Math.floor(10*Math.random()),a=Math.floor(6*Math.random())+4;for(let n=0;n<r;n++)e.push([t,a-n]);const i=[...n];i.push(e),m(i.flat())?e=[]:o=!0}n.push(e)}return n}();n.playerGameBoard.placeShip(e,i[0]),n.playerGameBoard.placeShip(t,i[1]),n.playerGameBoard.placeShip(r,i[2]),n.playerGameBoard.placeShip(o,i[3]),n.playerGameBoard.placeShip(a,i[4])}(e),y(),function(n,e){const t=document.querySelector("#change-turn-button");t.textContent="",t.disabled=!0,t.style.height=".001px",b(n,e),document.querySelector("#other-player-game-board-display").addEventListener("click",(t=>{if("game-board-location"===t.target.id&&!0===k){const r=+t.target.classList[1].split("")[0],o=+t.target.classList[1].split("")[1];if(!f(e.playerGameBoard.attackedLocations,[r,o])){n.sendAttack(e,[r,o]);const t=x.pop();e.sendAttack(n,t),function(n,e){const{board:t}=n.playerGameBoard,r=[[],[],[],[]];if("missed"===t[e[0]][e[1]])return;r[0]=[e[0]+1,e[1]],r[1]=[e[0]-1,e[1]],r[2]=[e[0],e[1]+1],r[3]=[e[0],e[1]-1];let o=0;for(const n of r)if(n[0]>9||n[0]<0||n[1]>9||n[1]<0){for(let e=0;e<x.length;e++)if(n[0]===x[e][0]&&n[1]===x[e][1]){r.splice(o,1);break}o++}for(let n=0;n<x.length;n++)for(const e of r)e[0]===x[n][0]&&e[1]===x[n][1]&&(x.splice(n,1),x.push(e))}(n,t),b(n,e)}}L(n,e)}))}(n,e))}()})()})();