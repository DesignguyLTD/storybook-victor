import{j as O}from"./jsx-runtime-BnIj46N_.js";import{v as D}from"./v4-D8aEg3BZ.js";import"./index-CsdIBAqE.js";const C="_button_1t4y6_1",v={button:C};function p({label:t,backgroundColor:o,color:e,fontSize:r,borderWidth:a,borderColor:u,borderStyle:g,margin:_,onclick:s,width:m,height:b,padding:l,borderRadius:d}){return O.jsx("button",{className:v.button,type:"button",onClick:s,style:{backgroundColor:o,color:e,fontSize:r,borderWidth:a,borderStyle:g,borderColor:u,margin:_,width:m,height:b,padding:l,borderRadius:d},children:t})}p.__docgenInfo={description:"",methods:[],displayName:"Button"};const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:P}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var T="storybook/actions",k=`${T}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},j=(t,o)=>{let e=Object.getPrototypeOf(t);return!e||o(e)?e:j(e,o)},N=t=>!!(typeof t=="object"&&t&&j(t,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof t.persist=="function"),F=t=>{if(N(t)){let o=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));o.persist();let e=Object.getOwnPropertyDescriptor(o,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...e,value:Object.create(r.constructor.prototype)}),o}return t},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function B(t,o={}){let e={...V,...o},r=function(...a){var l,d;if(o.implicit){let y=(l="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(y){let c=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),h=new P({phase:y.phase,name:t,deprecated:c});if(c)console.warn(h);else throw h}}let u=A.getChannel(),g=W(),_=5,s=a.map(F),m=a.length>1?s:s[0],b={id:g,count:0,data:{name:t,args:m},options:{...e,maxDepth:_+(e.depth||3),allowFunction:e.allowFunction||!1}};u.emit(k,b)};return r.isAction=!0,r.implicit=o.implicit,r}const z={title:"Buttons",component:p,argTypes:{label:{control:"text"},backgroundColor:{control:"color"},borderWidth:{control:"number"},borderColor:{control:"color"},borderStyle:{control:"text"},color:{control:"color"},fontSize:{control:"number"},width:{control:"number"},height:{control:"number"},margin:{control:"text"},onclick:{action:"clicked"},padding:{action:"text"},borderRadius:{action:"text"}}},n=t=>O.jsx(p,{...t});n.args={label:"Sign In",backgroundColor:"white",color:"black",onclick:B("Sign In"),padding:"9px 17px",borderRadius:"12px"};const i=t=>O.jsx(p,{...t});i.args={label:" Create an account",backgroundColor:"#651FFF",color:"white",onclick:B("Sign In"),padding:"9px 17px",borderRadius:"12px"};n.__docgenInfo={description:"",methods:[],displayName:"SignIn"};i.__docgenInfo={description:"",methods:[],displayName:"Create"};var E,R,S;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Button {...args} />",...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var I,x,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Button {...args} />",...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const M=["SignIn","Create"];export{i as Create,n as SignIn,M as __namedExportsOrder,z as default};