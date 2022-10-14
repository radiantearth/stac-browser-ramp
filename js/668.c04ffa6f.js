(self["webpackChunk_devglobalpartners_stac_browser_ramp"]=self["webpackChunk_devglobalpartners_stac_browser_ramp"]||[]).push([[668],{6668:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return b}});var r=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],class:t.classes,attrs:{"no-body":"","img-right":t.isList}},[t.hasImage?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList},on:{error:t.hideBrokenImg}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?e("b-card-text",{staticClass:"intro"},[t.data.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?e("b-card-text",{staticClass:"datetime"},[e("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},s=[],i=(a(7658),a(629)),n=a(3636),l=a(9898),o=a(6525),c=a.n(o),d=a(5834),h=a(5108),p={name:"Catalog",components:{StacLink:n["default"]},filters:{stripCommonmark(t){return c()(t)}},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data(){return{thumbnailShown:!1}},computed:{...(0,i.rn)(["crossOriginMedia","cardViewMode"]),...(0,i.Se)(["getStac"]),classes(){let t=["catalog-card"];return this.data||t.push("queued"),this.data&&this.data.deprecated&&t.push("deprecated"),this.hasImage&&t.push("has-thumbnail"),this.temporalExtent&&t.push("has-extent"),t},isList(){return"list"===this.cardViewMode},hasImage(){return this.showThumbnail&&this.thumbnail&&this.thumbnailShown},data(){return this.getStac(this.catalog)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return(0,d.formatTemporalExtent)(this.data.extent.temporal.interval[0],!0)}return null}},methods:{hideBrokenImg(t){h.log(`Hiding catalog thumbnail for ${t.srcElement.src} as it can't be loaded.`),this.thumbnailShown=null},load(t){t&&null!==this.thumbnailShown&&(this.thumbnailShown=!0),this.catalog instanceof l.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},u=p,m=a(1001),g=(0,m.Z)(u,r,s,!1,null,null,null),b=g.exports},6525:function(t,e,a){var r=a(5108);t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(s){return r.error(s),t}return a}}}]);
//# sourceMappingURL=668.c04ffa6f.js.map