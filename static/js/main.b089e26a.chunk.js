(this.webpackJsonpencrypt_image_web=this.webpackJsonpencrypt_image_web||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},28:function(e,t){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),l=a.n(r),c=a(7),o=a(8),s=a(2),d=a(9),u=a(10),h=a(13),p=a.n(h),m=a(45);function f(e,t,a,n){if(""!==n){for(var i,r,l,c,o,s,d,u=p()(n),h=0;h<e.data.length/4;h++){var m=function(){return Math.floor(257*u())+0},f=g(e,h);f[0]=a(f[0],m()),f[1]=a(f[1],m()),f[2]=a(f[2],m()),i=e,r=Math.floor(h%e.width),l=Math.floor(h/e.width),c=f[0],o=f[1],s=f[2],d=255,function(e,t,a,n,i,r){var l=4*t,c=e.data;c[l]=a,c[l+1]=n,c[l+2]=i,c[l+3]=r}(i,l*i.width+r,c,o,s,d)}t.putImageData(e,0,0)}else alert("Please provide a encryption key")}function g(e,t){var a=4*t,n=e.data;return[n[a],n[a+1],n[a+2],n[a+3]]}var y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={width:0,height:0,downloadAll:0,encryptAll:0,decryptAll:0,fixedSize:"500px",inProgress:!1},n.canvas=i.a.createRef(),n.image=i.a.createRef(),n.decryptClicked=n.decryptClicked.bind(Object(s.a)(n)),n.encryptClicked=n.encryptClicked.bind(Object(s.a)(n)),n.downloadImage=n.downloadImage.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount : ");var t=this.canvas.current,a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);var n=this.image.current;n.onload=function(){console.log(e.props.imageFile),e.setState({width:n.width,height:n.height},(function(){a.drawImage(n,0,0)}))}}},{key:"decryptClicked",value:function(){var e=this;this.setState({inProgress:!0},(function(){var t=e.canvas.current.getContext("2d");f(t.getImageData(0,0,e.state.width,e.state.height),t,(function(e,t){return function(e,t){return e>=t?e-t:256-(t-e)}(e,t)}),e.props.encryptionKey),e.setState({inProgress:!1})}))}},{key:"encryptClicked",value:function(){var e=this;this.setState({inProgress:!0},(function(){var t=e.canvas.current.getContext("2d");f(t.getImageData(0,0,e.state.width,e.state.height),t,(function(e,t){return function(e,t){var a=(e+t)%256;return(a<0||a>255)&&alert("wrong"),(e+t)%256}(e,t)}),e.props.encryptionKey),e.setState({inProgress:!1})}))}},{key:"downloadImage",value:function(){var e,t=document.createElement("a");t.download="filename",t.href=this.canvas.current.toDataURL("image/png;base64"),document.createEvent?((e=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(e)):t.fireEvent&&t.fireEvent("onclick")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card",style:{margin:"20px",backgroundColor:"#ffffff"}},i.a.createElement("div",{className:"card-body"},i.a.createElement("button",{style:{margin:"20px"},className:"btn btn-primary",onClick:function(){return e.downloadImage()}},"download"),i.a.createElement("button",{style:{margin:"20px"},className:"btn btn-danger",onClick:function(){return e.encryptClicked()}},"encrypt"),i.a.createElement("button",{style:{margin:"20px"},className:"btn btn-success",onClick:function(){return e.decryptClicked()}},"decrypt"),i.a.createElement("div",null,!0===this.state.inProgress?i.a.createElement(m.a,null):i.a.createElement("div",null)),i.a.createElement("div",{style:{width:this.state.fixedSize,maxWidth:this.state.fixedSize,height:this.state.fixedSize,maxHeight:this.state.fixedSize,overflow:"scroll"}},i.a.createElement("canvas",{ref:this.canvas,width:this.state.width,height:this.state.height})),i.a.createElement("img",{ref:this.image,src:this.props.imageFile,style:{display:"none"}})))}}]),a}(i.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={color:"#ffffff",canvasData:[],downloadAll:0,encryptAll:0,decryptAll:0,imageFile:"",encryptionKey:""},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.publishTaskClicked=n.publishTaskClicked.bind(Object(s.a)(n)),n.handleInputChangeEncryptionKey=n.handleInputChangeEncryptionKey.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){if(""==this.state.encryptionKey)alert("Please enter the encryption key before select your images.");else if(console.log(e.target.files),e.target.files.length>0){for(var t=[],a=0;a<e.target.files.length;a++)t.push({key:a,imageFile:URL.createObjectURL(e.target.files[a])});this.setState({canvasData:t})}e.target.value=null}},{key:"publishTaskClicked",value:function(e){}},{key:"handleInputChangeEncryptionKey",value:function(e){console.log(e),this.setState({encryptionKey:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{borderStyle:"solid",borderColor:this.state.color,backgroundColor:"#ffffff"}},i.a.createElement("div",{style:{margin:"20px"}},i.a.createElement("input",{type:"text",style:{marginBottom:"20px"},class:"form-control",placeholder:"Encryptio Key","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:this.state.encryptionKey,onChange:this.handleInputChangeEncryptionKey}),i.a.createElement("div",{class:"input-group"},i.a.createElement("div",{class:"input-group-prepend"},i.a.createElement("span",{class:"input-group-text",id:"inputGroupFileAddon01"},"Upload")),i.a.createElement("div",{class:"custom-file"},i.a.createElement("input",{type:"file",class:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",multiple:"multiple",onChange:this.handleChange}),i.a.createElement("label",{class:"custom-file-label",for:"inputGroupFile01"},"Choose image files"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("div",null,this.state.canvasData.map((function(t){return i.a.createElement(y,{key:t.key,imageFile:t.imageFile,downloadAll:e.state.downloadAll,encryptAll:e.state.encryptAll,decryptAll:e.state.decryptAll,encryptionKey:e.state.encryptionKey})}))))))}}]),a}(i.a.Component);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b089e26a.chunk.js.map