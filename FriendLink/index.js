(function(l,d,u,s,e,p,n,h){"use strict";const{FormSection:g,FormSwitchRow:c,FormRow:i}=u.Forms;function f(){return p.useProxy(e.storage),React.createElement(d.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(g,{title:"Show in",titleStyleType:"no_border"},React.createElement(c,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(i.Icon,{source:s.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(o){e.storage.profileButton=o}}),React.createElement(c,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(i.Icon,{source:s.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(o){e.storage.friendsTabButton=o}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1;const y=n.findByDisplayName("UserProfileSection",!1),m=n.findByProps("openLazy","hideActionSheet"),b=n.findByDisplayName("Icon"),B=n.findByDisplayName("UserProfileRow"),v=h.after("default",y,function(o,a){const{props:I}=a,{children:r}=I;console.log("ABC - I see child widget");try{let t=r[0]?.props?.children[0]?.props?.children[0]?.props?.children[0]?.props?.children,w=r[0]?.props?.children[0]?.props?.children[0]?.props?.children,R=r[0]?.props?.children[0]?.props?.children,A=r[0]?.props?.children;if(console.log(t),console.log(w),console.log(R),console.log(A),t===void 0)return;try{console.log("ABC - Test 1 - Success - "+t[0].props.children[0].props.children.length+" - ")}catch{console.log("ABC - Test 1 - Error - Invalid length")}try{console.log("ABC - Test 2 - Success - "+t[0].props.children[0].children[1].length)}catch{console.log("ABC - Test 2 - Error - Invalid length")}console.log("MysterDead - I see buttons");const E=function(){console.log("I was clicked!"),m.hideActionSheet()};console.log("MysterDead - test"),t.push(React.createElement(B,{label:"Send Friend Invite link",onPress:E,trailing:React.createElement(b,{source:s.getAssetByID(105),size:"medium",disableColor:!1})})),o.result=[a]}catch{}});var S={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),v()},settings:f};return l.default=S,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
