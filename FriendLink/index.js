(function(r,d,f,a,e,S,n,b){"use strict";const{FormSection:u,FormSwitchRow:i,FormRow:s}=f.Forms;function L(){return S.useProxy(e.storage),React.createElement(d.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(u,{title:"Show in",titleStyleType:"no_border"},React.createElement(i,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(s.Icon,{source:a.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(o){e.storage.profileButton=o}}),React.createElement(i,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(s.Icon,{source:a.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(o){e.storage.friendsTabButton=o}})),React.createElement(u,{title:"Dev",titleStyleType:"no_border"},React.createElement(i,{label:"Debug",subLabel:"Show debug logs prefixed by [FriendLink/INFO] - {message}",leading:React.createElement(s.Icon,{source:a.getAssetIDByName("ic_rulebook_16px")}),value:e.storage.debug,onValueChange:function(o){e.storage.debug=o}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1,e.storage.debug??=!1;const m=n.findByDisplayName("UserProfileSection",!1),E=n.findByProps("openLazy","hideActionSheet"),y=n.findByDisplayName("Icon"),U=n.findByDisplayName("UserProfileRow"),v=b.after("default",m,function(o,g){const{props:R}=g,{children:l}=R;if(l!==void 0){try{if(l[1]!=null&&l[1]!=null){let t=l[1]?.props?.children;if(console.log("FL - CHECKING"),t===void 0)return;console.log("FL - SUCCESS"),console.log("FL - CHECKING MUTUAL GUILDS");const c=t[0]?.props;if(c===void 0)return;console.log("FL - MUTUAL GUILDS SUCCESS"),console.log("FL - CHECKING MUTUAL GUILDS LABEL");const C=c?.label===d.i18n.Messages.MUTUAL_GUILDS;if(console.log(c),console.log("FL - LABEL CHECKED"),!C||(console.log("FL - LABEL IS MUTUAL"),console.log("FL - CHECKING STORAGE PROPS"),!e.storage.profileButton))return;console.log("FL - STORAGE PROPS SUCCESS"),console.log("FL - TRYING PRINT BUTTON INDEX=1"),console.log(t[1]),console.log("FL - PRINTED");const h=function(){E.hideActionSheet()};t.push(React.createElement(U,{label:"Send Friend Invite link",onPress:h,trailing:React.createElement(y,{source:105,size:"medium",disableColor:!0})}))}}catch(t){console.log("Error while rendering friend invite button in user relations error="+t.toString())}o.result=[g]}});var I={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),v()},settings:L};return r.default=I,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
