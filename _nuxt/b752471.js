(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{854:function(t,e,n){var content=n(859);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("04360178",content,!0,{sourceMap:!1})},858:function(t,e,n){"use strict";n(854)},859:function(t,e,n){var r=n(10)(!1);r.push([t.i,".img-responsive[data-v-4b1558ec]{width:100%;height:auto}.duration[data-v-4b1558ec]{background-color:#000;color:#fff;padding:0 10px;text-transform:uppercase;font-weight:300;font-size:.625rem;position:relative;top:-1.1rem;right:.2rem;float:right}.date[data-v-4b1558ec]{text-transform:uppercase;left:.2rem}.date[data-v-4b1558ec],.pid[data-v-4b1558ec]{background-color:#000;color:#fff;padding:0 10px;font-weight:300;font-size:.625rem;position:absolute;top:.2rem}.pid[data-v-4b1558ec]{right:.2rem}",""]),t.exports=r},861:function(t,e,n){"use strict";n.r(e);var r="billgateswantstokillus.com",o=n(195),c={props:{card:Object,channel:Object,video:Object},data:function(){return{APP_DOMAIN:r,thumbnailPicFailed:!1,thumbnailPicUrl:o.h}}},l=(n(858),n(67)),d=n(75),h=n.n(d),f=n(247),v=n(104),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column mb-6 justify-center"},[n("v-card",{staticClass:"content-bg",attrs:{flat:"",tile:"",router:"",to:{name:"videos-directory-path",params:{directory:decodeURIComponent(t.video.path).split("/")[0],path:decodeURIComponent(t.video.path).split("/")[1]}}},nativeOn:{click:function(e){t.card&&t.$router.go(0)}}},[n("div",{class:"v-image v-responsive theme--"+(t.$vuetify.theme.dark?"dark":"light")},[n("div",{staticClass:"v-responsive__sizer",staticStyle:{width:"298px",height:"168px"}}),t._v(" "),n("div",{staticClass:"v-image__image v-image__image--cover",style:'background-image: url("'+t.thumbnailPicUrl(t.video,t.thumbnailPicFailed)+'"); background-position: center center;'}),t._v(" "),n("div",{staticClass:"v-responsive__content",staticStyle:{width:"100%"}})]),t._v(" "),n("span",{staticClass:"date text-muted"},[t._v(t._s(t.video.uploadedDate))]),t._v(" "),n("span",{staticClass:"pid text-muted"},[t._v(t._s(t.video.id))]),t._v(" "),n("span",{staticClass:"duration text-muted"},[t._v(t._s(t.video.duration))])]),t._v(" "),n("div",{staticClass:"d-flex flex-column",staticStyle:{width:"100%",position:"relative"}},[n("v-card-title",{staticClass:"pl-1 pt-0 subtitle-1 font-weight-bold mr-0 pr-0",staticStyle:{"line-height":"1.2rem"}},[t._v("\n      "+t._s(t.video.title)+"-"+t._s(t.video.id)+"\n    ")]),t._v(" "),n("v-card-subtitle",{staticClass:"pl-1 pb-0"},[t._v("\n      "+t._s(t.video.uploadedFrom)+"\n    ")])],1)],1)}),[],!1,null,"4b1558ec",null);e.default=component.exports;h()(component,{VCard:f.a,VCardSubtitle:v.a,VCardTitle:v.c})},941:function(t,e,n){"use strict";n.r(e);n(18),n(59),n(39),n(19),n(259),n(24),n(68),n(52),n(60),n(45),n(50),n(69);var r,o=n(22),c=n(196),l=n(195),d={data:function(){return{isDev:!1,hasError:!1,errors:[],loading:!1,showMore:!1,copying:!1,copyMessage:"Copy name to clipboard",stickyBannerColor:l.g,defaultProfilePic:l.b,failedProfilePic:!1,channel:{},channels:[],allVideos:[],visibleVideos:[],totalFound:0,q:this.$route.query.q||null,m:this.$route.query.m||null,s:"asc"===this.$route.query.s?"asc":"desc"===this.$route.query.s?"desc":"asc",page:this.$route.query.page||0,logDialog:!1,logfileData:null}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c.STORAGE_URL,"/channels.json")).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,n.json();case 4:(r=e.sent).forEach((function(e){if(""!==e.trim())try{e=e.trim()}catch(t){e=null}else e=null;e&&t.channelNames.push(e)})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.hasError=!0,t.errors.push(e.t0);case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log(e,"cn"),e.length>0&&e.forEach(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.STORAGE_URL,"/").concat(n,"/channel.json")).then((function(t){try{return t.json()}catch(t){return{}}})).then((function(data){if(data.directory)return Object(l.i)(c.STORAGE_URL,data)}));case 2:if(r=e.sent,e.prev=3,!n||!r.name||n!==r.name){e.next=9;break}return t.channel=r,t.channels.push(r),e.next=9,fetch("".concat(c.STORAGE_URL,"/").concat(r.name,"/videos.json")).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var text,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.text();case 3:text=e.sent,(r=new RegExp(t.q,"i")).test(text)&&text.split("\n").forEach((function(line){var video=null;if(""!==line.trim())try{video=JSON.parse(line.trim())}catch(t){video=null}else video=null;video&&video.path&&(r.test(video.id)||r.test(video.title)||r.test(video.path))&&(t.totalFound+=1,video=Object(l.k)(c.STORAGE_URL,video),console.log(t.totalFound/t.size),t.allVideos.push(video))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t.hasError=!0,t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t.hasError=!0,t.errors.push(e.t0);case 15:return e.abrupt("return",t.allVideos);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}())}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),t.hasError=!0,t.errors.push(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()})),watch:{logDialog:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,fetch(this.channel.logUrl).then((function(t){return t.text()})).then((function(data){return data.split("\n")}));case 3:this.logfileData=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},created:function(){this.canCopy=!!navigator.clipboard},methods:{copy:function(s){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.copyMessage,t.copying=!0,t.copyMessage="Copying!",e.next=5,navigator.clipboard.writeText(s);case 5:t.copyMessage="Copied!",r=t,setTimeout((function(){r.copyMessage=n,r.copying=!1}),3e3);case 8:case"end":return e.stop()}}),e)})))()},profilePicError:function(){this.failedProfilePic=!0},showMoreActions:function(){var t=this;this.showMore=!this.showMore,this.$nextTick((function(){t.showMore&&t.$refs.filterText&&t.$refs.filterText.focus()}))},filterVideos:function(){if(this.q&&""!==this.q.trim()){var t=new RegExp(this.q,"i");this.visibleVideos=this.allVideos.filter((function(e){return t.test(e.title)||t.test(decodeURIComponent(e.path))})),console.log(this.visibleVideos,this.visibleVideos.length,"vv")}else this.visibleVideos=this.allVideos;this.visibleVideos.sort(Object(l.f)("uploaded",this.s))},sortVideos:function(){"asc"!==this.s?this.s="asc":this.s="desc",this.filterVideos()}}},h=n(67),f=n(75),v=n.n(f),m=n(842),x=n(847),y=n(853),_=n(102),w=n(936),C=n(849),k=n(80),R=n(881),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$route.query.q?n("div",[n("v-banner",{style:"top: "+t.$vuetify.application.top+"px",attrs:{sticky:"","two-line":"",color:t.stickyBannerColor(t.$vuetify)}},[n("v-row",[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t._v("\n        Searching for videos with\n      ")])],1),t._v(" "),n("v-row",{staticClass:"mt-0"},[n("v-col",{staticClass:"d-flex justify-center py-0",attrs:{cols:"12"}},[n("v-expand-x-transition",[n("div",{staticClass:"text-h6 transition-swing"},[n("NuxtLink",{staticClass:"text-decoration-none red--text font-weight-bold",attrs:{to:{name:"search",query:{q:t.q,s:t.$route.query.s?t.s:void 0}}}},[t._v("\n              "+t._s(t.q)+"\n              ")])],1)])],1)],1),t._v(" "),n("v-row",{staticClass:"mt-0"},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t._v("\n        Found "+t._s(t.totalFound.toLocaleString())+" videos\n      ")])],1),t._v(" "),n("v-row",{staticClass:"mt-0"},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-pagination",{attrs:{length:6,circle:"","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1),t._v(" "),n("v-container",{staticClass:"px-6",attrs:{fluid:"",justify:"center",align:"center"}},[t.allVideos.length>0?n("v-row",{staticClass:"d-flex align-items"},t._l(t.allVideos,(function(video,i){return n("v-col",{key:i,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[n("v-skeleton-loader",{attrs:{type:"card-avatar"}},[n("video-card",{attrs:{channel:t.channel,video:video}})],1)],1)})),1):n("v-row",{staticClass:"d-flex justify-center"},[t.loading?t._e():n("v-sheet",{staticClass:"mt-4 px-4 pt-4 pb-3",attrs:{color:t.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",tile:""}},[n("v-expand-x-transition",[n("div",{staticClass:"text-h6 transition-swing text-center"})])],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;v()(component,{VideoCard:n(861).default}),v()(component,{VBanner:m.a,VCol:x.a,VContainer:y.a,VExpandXTransition:_.b,VPagination:w.a,VRow:C.a,VSheet:k.a,VSkeletonLoader:R.a})}}]);