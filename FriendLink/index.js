(function(l,c,d,r,e,u,o,f){"use strict";const{FormSection:g,FormSwitchRow:s,FormRow:a}=d.Forms;function h(){return u.useProxy(e.storage),React.createElement(c.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(g,{title:"Show in",titleStyleType:"no_border"},React.createElement(s,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(a.Icon,{source:r.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(t){e.storage.profileButton=t}}),React.createElement(s,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(a.Icon,{source:r.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(t){e.storage.friendsTabButton=t}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1;const m=o.findByDisplayName("UserProfileSection",!1),y=o.findByProps("openLazy","hideActionSheet"),b=o.findByDisplayName("Icon"),p=o.findByDisplayName("UserProfileRow"),v=f.after("default",m,function(t,i){const{props:S}=i,{children:w}=S;console.log("ABC - I see child widget");let n=w[0]?.props?.children[1]?.props?.children;if(n===void 0)return;try{console.log("ABC - Test 1 - Success - "+n[0].props.children[0].props.children.length+" - ")}catch{console.log("ABC - Test 1 - Error - Invalid length")}try{console.log("ABC - Test 2 - Success - "+n[0].props.children[0].children[1].length)}catch{console.log("ABC - Test 2 - Error - Invalid length")}console.log("MysterDead - I see buttons");const I=function(){console.log("I was clicked!"),y.hideActionSheet()};console.log("MysterDead - test"),n.push(React.createElement(p,{label:"Send Friend Invite link",onPress:I,trailing:React.createElement(b,{source:r.getAssetByID(105),size:"medium",disableColor:!1})})),t.result=[i]});var B={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),v()},settings:h};return l.default=B,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
