(function(o,s,l,n,e,c,a,d){"use strict";const{FormSection:u,FormSwitchRow:r,FormRow:i}=l.Forms;function f(){return c.useProxy(e.storage),React.createElement(s.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(u,{title:"Show in",titleStyleType:"no_border"},React.createElement(r,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(i.Icon,{source:n.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(t){e.storage.profileButton=t}}),React.createElement(r,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(i.Icon,{source:n.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(t){e.storage.friendsTabButton=t}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1;const m=a.findByDisplayName("getRelations",!1);a.findByProps("openLazy","hideActionSheet");const b=d.after("default",m,function(t,v){return console.log("ABC - CTX - I see the element"),{...t,UserProfileRow:{label:"Send Friend Invite Link",onPress:function(){console.log("ABC - Pressed")}}}});var g={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),b()},settings:f};return o.default=g,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
