(this["webpackJsonppolytonic-js"]=this["webpackJsonppolytonic-js"]||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},30:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(14),i=a.n(s),r=a(9),l=a(16),c=a(1),h=a(15),d=a.n(h);const u={default:["` 1 2 3 4 5 6 7 8 9 0 \u0313\u0342 \u0313\u0300 {bksp}","{tab} ; \u03c2 \u03b5 \u03c1 \u03c4 \u03c5 \u03b8 \u03b9 \u03bf \u03c0 \u0342 \u0300 \\","{lock} \u03b1 \u03c3 \u03b4 \u03c6 \u03b3 \u03b7 \u03be \u03ba \u03bb \u0301 \u0313 {enter}","{shift} \u03b6 \u03c7 \u03c8 \u03c9 \u03b2 \u03bd \u03bc , . \u0313\u0301 {copy}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) \u0314\u0342 \u0314\u0300 {bksp}","{tab} : \u0308\u0301 \u0395 \u03a1 \u03a4 \u03a5 \u0398 \u0399 \u039f \u03a0 \u0345 \u0300 |","{lock} \u0391 \u03a3 \u0394 \u03a6 \u0393 \u0397 \u039e \u039a \u039b \u0308 \u0314 {enter}","{shift} \u0396 \u03a7 \u03a8 \u03a9 \u0392 \u039d \u039c < > \u0314\u0301 {copy}",".com @ {space}"]},p={"{copy}":"copy"};class m extends n.Component{constructor(e){super(e),this.state={value:"",layoutName:"default",shifted:!1},this.handleChange=this.handleChange.bind(this),this.handleKeyboardChange=this.handleKeyboardChange.bind(this),this.handleKeyPress=this.handleKeyPress.bind(this),this.copyTextarea=this.copyTextarea.bind(this)}handleChange(e){const t=e.target.value,a=this.keyboardRef.setInput;this.setState({value:t},()=>a(t))}handleKeyboardChange(e){const t=this.keyboardRef.caretPosition;this.setState(({shifted:t})=>t?{value:e,shifted:!1,layoutName:"default"}:{value:e},()=>{return e=this.textareaRef,a=t,e.focus(),void(null!==a&&e.setSelectionRange&&e.setSelectionRange(a,a));var e,a})}handleKeyPress(e){"{copy}"===e&&this.copyTextarea(),"{shift}"===e&&this.setState(({shifted:e})=>({layoutName:e?"default":"shift",shifted:!e})),"{lock}"===e&&this.setState(({layoutName:e})=>({layoutName:"default"===e?"shift":"default",shifted:!1}))}copyTextarea(){const e=window?window.document:null;e&&e.execCommand&&(this.textareaRef.select(),e.execCommand("copy"),this.textareaRef.blur())}render(){const e=this.state,t=e.value,a=e.layoutName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row pt-4 mb-3"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h1",{className:"h3 font-weight-normal"},o.a.createElement("label",{htmlFor:"polytonic-keyboard-input-and-output",className:"mb-0"},"Polytonic Greek Virtual Keyboard")))),o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"mb-2"},o.a.createElement("textarea",{ref:e=>{this.textareaRef=e},className:"form-control input-lg",id:"polytonic-keyboard-input-and-output",type:"text",placeholder:"Type using the virtual keyboard ...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:"4",value:t,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement(d.a,{keyboardRef:e=>{this.keyboardRef=e},onChange:this.handleKeyboardChange,onKeyPress:this.handleKeyPress,layout:u,display:p,mergeDisplay:!0,layoutName:a,preventMouseDownDefault:!0,newLineOnEnter:!0}))))}}var f=m;var y=()=>o.a.createElement(l.a,{basename:"/polytonic-js"},o.a.createElement(o.a.Fragment,null,o.a.createElement(r.PerseidsHeader,null,"Greek Polytonic Keyboard"),o.a.createElement("main",{role:"main"},o.a.createElement("div",{className:"container"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:f})))),o.a.createElement(r.PerseidsFooter,{report:"https://github.com/perseids-project/polytonic-js",github:"https://github.com/perseids-project/polytonic-js/issues"})));const g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(28),a(29),a(30),a(31),a(32),a(33);i.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/polytonic-js",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/polytonic-js","/service-worker.js");g?(!function(e,t){fetch(e).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):b(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):b(t,e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.46f6c91e.chunk.js.map