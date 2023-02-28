(function(o,u,s,r,e,f,n,m){"use strict";const{FormSection:g,FormSwitchRow:a,FormRow:i}=s.Forms;function b(){return f.useProxy(e.storage),React.createElement(u.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(g,{title:"Show in",titleStyleType:"no_border"},React.createElement(a,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(i.Icon,{source:r.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(t){e.storage.profileButton=t}}),React.createElement(a,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(i.Icon,{source:r.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(t){e.storage.friendsTabButton=t}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1;const y=n.findByDisplayName("UserProfileSection",!1),v=n.findByDisplayName("Icon",!1),h=n.findByProps("openLazy","hideActionSheet"),p=m.after("default",y,function(t,l){const{props:B}=l,{children:c}=B;if(console.log("test3 - Try to see children"),c===void 0)return;console.log("test3 - I see child widget");const d=c[0]?.props?.children;if(console.log("test3 - Try to see buttons"),d===void 0)return;console.log("test3 - I see buttons");const R=function(){console.log("test3 - I was clicked!"),h.hideActionSheet()};console.log("test3 - test"),d.push(React.createElement(s.Forms.FormRow,{label:"Send Friend Invite link",onPress:R,trailing:React.createElement(v,{source:105,size:"medium",disableColor:!1})})),t.result=[l]});var w={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),p()},settings:b};return o.default=w,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
