(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b33d524a"],{"4ff9":function(e,t,i){},"59ed":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"meetingPlanner"},[i("v-container",[e.state.poll?i("v-card",{attrs:{width:"600"}},[i("v-card-title",[i("v-text-field",{attrs:{label:"Question","hide-details":""},model:{value:e.state.poll.question,callback:function(t){e.$set(e.state.poll,"question",t)},expression:"state.poll.question"}})],1),i("v-card-text",[i("v-list",{attrs:{dense:""}},[i("v-checkbox",{attrs:{label:"Multiple answers"},model:{value:e.state.poll.multipleAnswers,callback:function(t){e.$set(e.state.poll,"multipleAnswers",t)},expression:"state.poll.multipleAnswers"}}),i("v-subheader",[e._v("Answers")]),e._l(e.state.poll.answers,(function(t,s){return i("v-list-item",{key:s},[i("v-text-field",{attrs:{"append-outer-icon":"mdi-close","hide-details":""},on:{"click:append-outer":function(i){return e.removeAnswer(t)}},model:{value:t.text,callback:function(i){e.$set(t,"text",i)},expression:"answer.text"}})],1)}))],2)],1),i("v-card-actions",[i("v-btn",{attrs:{outlined:""},on:{click:function(){return e.addAnswer()}}},[e._v(" add answer ")]),i("v-btn",{attrs:{color:"red",outlined:""},on:{click:e.deletePoll}},[e._v("delete poll")]),i("v-spacer"),i("v-btn",{attrs:{outlined:""},on:{click:e.cancel}},[e._v("cancel")]),i("v-btn",{attrs:{outlined:""},on:{click:e.submit}},[e._v("submit")])],1)],1):e._e()],1)],1)},n=[],l=i("a6f4"),o=i("a0b3"),a={name:"PollDetails",props:{id:String},setup:function(e,t){var i=t.root,s=Object(l["d"])({poll:{}});o["a"].read(e.id).then((function(e){s.poll=e,i.$route.meta.breadcrumbs[3].text=e.question}));var n=function(){o["a"].update(s.poll).then((function(){i.$router.back()}))},a=function(){i.$router.back()},r=function(){s.poll.answers.push({text:"",votes:0})},h=function(e){s.poll.answers=s.poll.answers.filter((function(t){return t!==e}))},u=function(){confirm("Are you sure to delete it?")&&o["a"].delete(s.poll._id).then((function(){i.$router.go(-1)}))};return{addAnswer:r,cancel:a,deletePoll:u,removeAnswer:h,state:s,submit:n}}},r=a,h=i("2877"),u=i("6544"),d=i.n(u),c=i("8336"),p=i("b0af"),f=i("99d9"),b=i("ac7c"),v=i("a523"),g=i("8860"),m=i("da13"),x=i("2fa4"),$=i("e0c7"),w=(i("4ff9"),i("c37a")),V=(i("e9b1"),i("7560")),y=i("58df"),S=Object(y["a"])(V["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:i}=t,s=parseInt(i.max,10),n=parseInt(i.value,10),l=s?`${n} / ${s}`:String(i.value),o=s&&n>s;return e("div",{staticClass:"v-counter",class:{"error--text":o,...Object(V["b"])(t)}},l)}}),I=S,k=i("ba87"),C=i("90a2"),W=i("d9bd"),A=i("2b0e");function L(e){return"undefined"!==typeof window&&"IntersectionObserver"in window?A["default"].extend({name:"intersectable",mounted(){C["a"].inserted(this.$el,{name:"intersect",value:this.onObserve})},destroyed(){C["a"].unbind(this.$el)},methods:{onObserve(t,i,s){if(s)for(let n=0,l=e.onVisible.length;n<l;n++){const t=this[e.onVisible[n]];"function"!==typeof t?Object(W["c"])(e.onVisible[n]+" method is not available on the instance but referenced in intersectable mixin options"):t()}}}}):A["default"].extend({name:"intersectable"})}var O=i("297c"),B=i("38cb"),P=i("dc22"),F=i("5607"),D=i("80d2");const _=Object(y["a"])(w["a"],L({onVisible:["onResize","tryAutofocus"]}),O["a"]),z=["color","file","time","date","datetime-local","week","month"];var E=_.extend().extend({name:"v-text-field",directives:{resize:P["a"],ripple:F["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...w["a"].options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const e=B["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return w["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){var e;return(null==(e=this.lazyValue)?void 0:e.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||z.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder)},labelValue(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder)}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&Object(W["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(W["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(W["c"])("shaped should be used with either filled or outlined",this)},mounted(){this.$watch(()=>this.labelValue,this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame(()=>this.isBooted=!0)},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick(()=>this.internalValue=null)},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=w["a"].options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){if(!this.clearable)return null;const e=this.isDirty?void 0:{attrs:{disabled:!0}};return this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback,e)])},genCounter(){if(!this.hasCounter)return null;const e=!0===this.counter?this.attrs$.maxlength:this.counter;return this.$createElement(I,{props:{dark:this.dark,light:this.light,max:e,value:this.computedCounterValue}})},genControl(){return w["a"].options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(k["a"],e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(D["f"])(e)}},[t])},genInput(){const e=Object.assign({},this.listeners$);return delete e.change,this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...this.attrs$,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.placeholder,readonly:this.isReadonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const e=w["a"].options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:"v-text-field__"+e,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$nextTick(()=>this.$emit("blur",e))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e)))},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===D["q"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),w["a"].options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),w["a"].options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){return!(!this.autofocus||"undefined"===typeof document||!this.$refs.input||document.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}}),j=Object(h["a"])(r,s,n,!1,null,null,null);t["default"]=j.exports;d()(j,{VBtn:c["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCheckbox:b["a"],VContainer:v["a"],VList:g["a"],VListItem:m["a"],VSpacer:x["a"],VSubheader:$["a"],VTextField:E})},e9b1:function(e,t,i){}}]);
//# sourceMappingURL=chunk-b33d524a.73e7153b.js.map