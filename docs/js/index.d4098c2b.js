(function(t){function e(e){for(var a,s,r=e[0],o=e[1],c=e[2],d=0,h=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&h.push(l[s][0]),l[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==l[o]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},l={index:0},n=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0933":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("8bbf"),l=i.n(a),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticStyle:{color:"white","background-color":"#67C23A","text-align":"center","font-size":"12px",padding:"5px 0 5px 0",position:"absolute",top:"0",width:"100%"}},[t._v("【没有保存，就没有泄露】【本站绝不会保存您的任何资源】【您现在可以断网（拔网线或开飞行模式）进行操作】")]),e("img-to-pdf"),e("a",{staticClass:"github-corner",attrs:{href:"https://github.com/antenbabby/img2pdf","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex",margin:"40px"}},[e("div",{staticStyle:{height:"800px","min-width":"550px",position:"relative","z-index":"999"}},[e("embed",{staticStyle:{overflow:"auto",width:"100%",height:"100%"},attrs:{src:t.pdfSrc,type:"application/pdf"}})]),e("div",{staticStyle:{margin:"40px"}},[e("el-upload",{attrs:{action:"#","list-type":"picture-card","auto-upload":!1,accept:"image/*","file-list":t.fileList,multiple:!0,"on-change":t.handleChange},scopedSlots:t._u([{key:"file",fn:function({file:i}){return e("div",{},[e("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{fit:"cover",src:i.url,alt:""}}),e("span",{staticClass:"el-upload-list__item-actions"},[e("span",{staticClass:"el-upload-list__item-left",on:{click:function(e){return t.handleMove(i,"left")}}},[e("i",{staticClass:"el-icon-back"})]),e("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(i)}}},[e("i",{staticClass:"el-icon-zoom-in"})]),e("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(i)}}},[e("i",{staticClass:"el-icon-delete"})]),e("span",{staticClass:"el-upload-list__item-right",on:{click:function(e){return t.handleMove(i,"right")}}},[e("i",{staticClass:"el-icon-right"})])])],1)}}])},[e("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),t.previewVisible?e("el-image-viewer",{attrs:{"on-close":()=>{this.previewVisible=!1},initialIndex:t.initialIndex,"url-list":t.previewImage}}):t._e(),e("div",{staticStyle:{"margin-top":"40px"}},[e("div",[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("拼接长图：")]),e("el-radio-group",{model:{value:t.connectImage,callback:function(e){t.connectImage=e},expression:"connectImage"}},[e("el-radio",{attrs:{label:"N"}},[t._v("否")]),e("el-radio",{attrs:{label:"Y"}},[t._v("是")])],1)],1)]),"N"===t.connectImage?e("div",[e("div",{staticStyle:{"margin-top":"20px"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("计量单位：")]),e("el-radio-group",{attrs:{disabled:t.unitDisabled},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}},[e("el-radio",{attrs:{label:"pt"}},[t._v("points")]),e("el-radio",{attrs:{label:"mm"}},[t._v("mm")]),e("el-radio",{attrs:{label:"cm"}},[t._v("cm")]),e("el-radio",{attrs:{label:"in"}},[t._v("in")]),e("el-radio",{attrs:{label:"px"}},[t._v("px")]),e("el-radio",{attrs:{label:"pc"}},[t._v("pc")]),e("el-radio",{attrs:{label:"em"}},[t._v("em")]),e("el-radio",{attrs:{label:"ex"}},[t._v("ex")])],1)],1),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("纸张大小：")]),e("el-radio-group",{on:{change:t.pageSizeChange},model:{value:t.pageSizeRadio,callback:function(e){t.pageSizeRadio=e},expression:"pageSizeRadio"}},[e("el-radio",{attrs:{label:0}},[t._v("a4")]),e("el-radio",{attrs:{label:1}},[t._v("b3")]),e("el-radio",{attrs:{label:2}},[t._v("原图尺寸")]),e("el-radio",{attrs:{label:3}},[t._v("自定义规格")]),e("el-radio",{attrs:{label:4}},[t._v("自定义尺寸")])],1)],1),3===t.pageSizeRadio?e("div",{staticStyle:{"margin-top":"20px"}},[t._m(0),e("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入上面列出来的值，如：a4、b3"},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}})],1):t._e(),4===t.pageSizeRadio?e("div",{staticStyle:{"margin-top":"20px"}},[e("el-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"如：210"},model:{value:t.pageWidth,callback:function(e){t.pageWidth=e},expression:"pageWidth"}}),e("span",[t._v(" × ")]),e("el-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"如：297"},model:{value:t.pageHeight,callback:function(e){t.pageHeight=e},expression:"pageHeight"}})],1):t._e(),e("div",{staticStyle:{"margin-top":"20px"}},[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("纸张方向：")]),e("el-radio-group",{attrs:{disabled:t.pageDirectionDisabled},model:{value:t.pageDirection,callback:function(e){t.pageDirection=e},expression:"pageDirection"}},[e("el-radio",{attrs:{label:"portrait"}},[t._v("纵向")]),e("el-radio",{attrs:{label:"landscape"}},[t._v("横向")])],1)],1)]),e("div",{staticStyle:{"margin-top":"20px"}},[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("左右边距：")]),e("el-input-number",{attrs:{min:0},model:{value:t.x,callback:function(e){t.x=e},expression:"x"}})],1)]),e("div",{staticStyle:{"margin-top":"20px"}},[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("上下边距：")]),e("el-input-number",{attrs:{min:0},model:{value:t.y,callback:function(e){t.y=e},expression:"y"}})],1)]),e("div",{staticStyle:{"margin-top":"20px"}},[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("访问密码：")]),e("el-input",{staticStyle:{width:"400px"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])]):t._e(),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.convert}},[t._v("导出PDF")])],1)])],1)])},o=[function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("a0 - a10")]),e("li",[t._v("b0 - b10")]),e("li",[t._v("c0 - c10")]),e("li",[t._v("dl")]),e("li",[t._v("letter")]),e("li",[t._v("government-letter")]),e("li",[t._v("legal")]),e("li",[t._v("junior-legal")]),e("li",[t._v("ledger")]),e("li",[t._v("tabloid")]),e("li",[t._v("credit-card")])])}],c=(i("14d9"),i("13d5"),i("88a7"),i("271a"),i("5494"),i("cf03")),p=i.n(c),d=i("08a9"),h={name:"ImgToPdf",data(){return{previewVisible:!1,initialIndex:0,fileList:[],loading:!1,unitDisabled:!1,pageDirectionDisabled:!1,pageSizeRadio:0,pageSize:"a4",pageWidth:210,pageHeight:297,pageDirection:"portrait",connectImage:"N",x:0,y:0,unit:"mm",password:null,pdfSrc:void 0}},computed:{previewImage(){return this.fileList.map(t=>t.url)}},components:{ElImageViewer:d["a"]},methods:{convert(){if(0===this.fileList.length)return void this.$message.warning("请先上传至少一张图片");this.loading=!0;let t=[];for(let e=0;e<this.fileList.length;e++)t.push(this.getFormat(this.fileList[e]));Promise.all(t).then(()=>{let t;if("Y"===this.connectImage){let e=Math.max(...this.fileList.map(t=>t.width));const i=this.fileList.map(t=>e*t.height/t.width+1),a=document.createElement("canvas");a.width=e,a.height=i.reduce((t,e)=>t+e);const l=a.getContext("2d");let n=0;this.fileList.forEach((t,a)=>{const s=i[a];l.drawImage(t.canvas,0,n,e,s),n=n+s+1}),t=new p.a({unit:"px",format:[e,a.height]}),t.addImage({imageData:a,x:0,y:0,width:e,height:a.height})}else{let e=this.fileList[0];t=new p.a({orientation:e.pageDirection,unit:this.unit,format:e.pageSize,hotfixes:"px"===this.unit?["px_scaling"]:null,encryption:{ownerPassword:this.password?this.password:null,userPassword:this.password?this.password:null}});let i=Math.max(e.width/(t.getPageWidth(1)-2*this.x),e.height/(t.getPageHeight(1)-2*this.y));t.addImage({imageData:e.canvas,x:this.x,y:this.y,width:e.width/i,height:e.height/i});for(let a=1;a<this.fileList.length;a++){let e=this.fileList[a];t.addPage(e.pageSize,e.pageDirection);let i=Math.max(e.width/(t.getPageWidth(a+1)-2*this.x),e.height/(t.getPageHeight(a+1)-2*this.y));t.addImage({imageData:e.canvas,x:this.x,y:this.y,width:e.width/i,height:e.height/i})}}this.pdfSrc=t.output("bloburi").toString(),this.loading=!1}).catch(t=>{console.error(t),this.$message.error("导出失败"),this.loading=!1})},getFormat(t){return new Promise((e,i)=>{t.pageDirection=this.pageDirection;let a=this.getFileUrl(t),l=new Image;l.src=a,l.onload=()=>{let a=document.createElement("canvas");a.width=l.width,a.height=l.height,t.width=l.width,t.height=l.height;let n=a.getContext("2d");n.fillStyle="white",n.fillRect(0,0,a.width,a.height),n.drawImage(l,0,0,l.width,l.height),t.canvas=a,0===this.pageSizeRadio?(t.pageSize="a4",e({})):1===this.pageSizeRadio?(t.pageSize="b3",e({})):2===this.pageSizeRadio?(t.pageSize=[l.width+2*this.x,l.height+2*this.y],t.pageDirection=l.width>l.height?"landscape":"portrait",e({})):3===this.pageSizeRadio?(t.pageSize=this.pageSize,e({})):4===this.pageSizeRadio?(t.pageSize=[this.pageWidth,this.pageHeight],e({})):i()},l.onerror=t=>i(t)})},handlePictureCardPreview(t){this.initialIndex=this.getFileIndex(t),this.previewVisible=!0},handleChange(t,e){this.fileList=[...e]},handleRemove(t){let e=this.getFileIndex(t);this.fileList.splice(e,1)},handleMove(t,e){let i=this.getFileIndex(t);if(0===i&&"left"===e)return void this.$message.warning("已经是第一张图片了，不能再向左移动了");if(i===this.fileList.length-1&&"right"===e)return void this.$message.warning("已经是最后一张图片了，不能再向右移动了");let a=this.fileList[i];this.fileList.splice(i,1),"left"===e?this.fileList.splice(i-1,0,a):this.fileList.splice(i+1,0,a)},getFileIndex(t){for(let e=0;e<this.fileList.length;e++)if(this.fileList[e].uid===t.uid)return e},getFileUrl(t){let e=t.url;return t.url||(void 0!==window.URL?e=window.URL.createObjectURL(t.raw):void 0!==window.webkitURL&&(e=window.webkitURL.createObjectURL(t.raw))),t.url=e,e}},watch:{pageSizeRadio(t,e){2===t?(this.unit="px",this.unitDisabled=!0,this.pageDirectionDisabled=!0):2===e&&(this.unit="mm",this.unitDisabled=!1,this.pageDirectionDisabled=!1)}}},g=h,u=i("2877"),f=Object(u["a"])(g,r,o,!1,null,"1366ff14",null),v=f.exports,m={name:"App",components:{ImgToPdf:v}},b=m,x=(i("f5bc"),Object(u["a"])(b,n,s,!1,null,null,null)),w=x.exports,y=i("5f72"),_=i.n(y);i("0fae");l.a.config.productionTip=!1,l.a.use(_.a),new l.a({render:t=>t(w)}).$mount("#app")},"5f72":function(t,e){t.exports=ELEMENT},"8bbf":function(t,e){t.exports=Vue},cf03:function(t,e){t.exports=jspdf},f5bc:function(t,e,i){"use strict";i("0933")}});
