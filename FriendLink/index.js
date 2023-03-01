(function(n,i,d,r,e,u,l,g){"use strict";const{FormSection:h,FormSwitchRow:s,FormRow:c}=d.Forms;function f(){return u.useProxy(e.storage),React.createElement(i.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(h,{title:"Show in",titleStyleType:"no_border"},React.createElement(s,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(c.Icon,{source:r.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(t){e.storage.profileButton=t}}),React.createElement(s,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(c.Icon,{source:r.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(t){e.storage.friendsTabButton=t}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1;const p=l.findByDisplayName("UserProfileRelations",!1);l.findByProps("openLazy","hideActionSheet");const m=g.after("default",p.type.prototype,function(t,a){console.log("ABC - CTX - I see the element");const{props:v}=a,{children:o}=v;if(o!==void 0){try{console.log("ABC - Test 0 - Success - "+o[0].length)}catch{console.log("ABC - Test 0 - Error - Invalid length")}try{console.log("ABC - Test 1 - Success - "+o[0].props.children.length)}catch{console.log("ABC - Test 1 - Error - Invalid length")}try{console.log("ABC - Test 2 - Success - "+o[0].props.children[0].props.children.length)}catch{console.log("ABC - Test 2 - Error - Invalid length")}try{console.log("ABC - Test 3 - Success - "+o[0].props.children[0].props.children[0].props.children.length)}catch{console.log("ABC - Test 3 - Error - Invalid length")}t.result=[a]}});var y={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),m()},settings:f};return n.default=y,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
