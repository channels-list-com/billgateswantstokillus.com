(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{924:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},943:function(t,e,n){"use strict";n.r(e);var r={props:["props"],mounted:function(){this.$emit("loadMoreItems",this.props.page)},onIntersect:function(t,e){t[0].isIntersecting&&t[0].target.dataset.last&&this.props.page<this.props.lastPage&&this.$emit("loadMoreItems",this.props.page+1)}},o=n(67),c=n(924),l=n.n(c),d=n(140),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.props.items,(function(e,i){return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],key:i,attrs:{"data-last":i===t.props.items.length-1}},[t._t("default",null,{item:e})],2)})),0)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:d.a})}}]);