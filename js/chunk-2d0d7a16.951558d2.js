(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a16"],{7843:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-button-group",{attrs:{title:"Sort",size:"sm"}},[e("b-button",{attrs:{variant:"outline-primary",title:"Sort in acending order (A-Z)",pressed:1===t.value||t.enforce&&-1!==t.value},on:{click:function(n){return t.toggle(1)}}},[e("b-icon-sort-alpha-down"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Ascending")])],1),e("b-button",{attrs:{variant:"outline-primary",title:"Sort in descending order (Z-A)",pressed:-1===t.value},on:{click:function(n){return t.toggle(-1)}}},[e("b-icon-sort-alpha-up"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Descending")])],1)],1)},a=[],r=(e("a9e3"),e("7386")),i={id:"SortButtons",components:{BIconSortAlphaDown:r["y"],BIconSortAlphaUp:r["z"]},props:{value:{type:Number,default:0},enforce:{type:Boolean,default:!1}},methods:{toggle:function(t){var n=this.enforce?1:0;this.value!==t&&(n=t),this.$emit("input",n)}}},l=i,s=e("2877"),u=Object(s["a"])(l,o,a,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d7a16.951558d2.js.map