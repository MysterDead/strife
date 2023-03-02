(function(i,s,m,a,e,f,n,y){"use strict";const{FormSection:c,FormSwitchRow:d,FormRow:t}=m.Forms;function b(){return f.useProxy(e.storage),React.createElement(s.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(c,{title:"General",titleStyleType:"no_border"},React.createElement(t,{label:"Invites History",subLabel:"Show invites list history",leading:React.createElement(t.Icon,{source:a.getAssetIDByName("ic_history_24px")})}),React.createElement(t,{label:"Generate Invite",subLabel:"Open modal to generate invite from this place",leading:React.createElement(t.Icon,{source:a.getAssetIDByName("ic_audit_log_24px")})})),React.createElement(c,{title:"Show in",titleStyleType:"no_border"},React.createElement(d,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(t.Icon,{source:a.getAssetIDByName("ic_members_24px")}),value:e.storage.profileButton,onValueChange:function(o){e.storage.profileButton=o}})),React.createElement(c,{title:"Dev",titleStyleType:"no_border"},React.createElement(d,{label:"Debug",subLabel:"Show debug logs prefixed by [FriendLink/INFO] - {message}",leading:React.createElement(t.Icon,{source:a.getAssetIDByName("ic_rulebook_16px")}),value:e.storage.debug,onValueChange:function(o){e.storage.debug=o}}),React.createElement(t,{label:"Version",subLabel:"Alpha - 0.1",leading:React.createElement(t.Icon,{source:a.getAssetIDByName("ic_selection_checked_24px")})})))}n.findByProps("getChannel","getDMFromUserId"),e.storage.profileButton??=!1,e.storage.debug??=!1;const p=n.findByDisplayName("UserProfileSection",!1);n.findByDisplayName("UserProfileRelations",!1),n.findByProps("openLazy","hideActionSheet");const v=n.findByDisplayName("Icon"),h=n.findByDisplayName("UserProfileRow"),R=y.instead("default",p,function(o){const{props:u}=o;console.log(u);const{children:r}=u;if(r!==void 0){try{if(r[1]!=null&&r[1]!=null){let l=r[1]?.props?.children;if(l===void 0)return;const g=l[1]?.props;if(g===void 0||g?.label!==s.i18n.Messages.MUTUAL_GUILDS||!e.storage.profileButton)return;const _=function(){console.log("click")};l.push(React.createElement(h,{label:"Invite as Friend Invite",onPress:_,trailing:React.createElement(v,{source:411,size:"medium",disableColor:!0})}))}}catch(l){console.log("Error while rendering friend invite button in user relations error="+l.toString())}o.result=[component]}});var I={onLoad:function(){console.log("Hello world!")},onUnload:function(){console.log("Goodbye, world."),R()},settings:b};return i.default=I,Object.defineProperty(i,"__esModule",{value:!0}),i})({},vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher);
