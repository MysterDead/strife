(function(t,n,l,s,a,e,c,u){"use strict";const{FormSection:d,FormSwitchRow:r,FormRow:i}=s.Forms;function f(){return c.useProxy(e.storage),React.createElement(l.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(d,{title:"Show in",titleStyleType:"no_border"},React.createElement(r,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(i.Icon,{source:a.getAssetIDByName("ic_members")}),value:e.storage.profileButton,onValueChange:function(o){e.storage.profileButton=o}}),React.createElement(r,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(i.Icon,{source:a.getAssetIDByName("friends_toast_icon")}),value:e.storage.friendsTabButton,onValueChange:function(o){e.storage.friendsTabButton=o}})))}e.storage.profileButton??=!1,e.storage.friendsTabButton??=!1,u.findByDisplayName("UserProfileRelations");var m={onLoad:function(){n.logger.log("Hello world!")},onUnload:function(){n.logger.log("Goodbye, world.")},settings:f};return t.default=m,Object.defineProperty(t,"__esModule",{value:!0}),t})({},vendetta,vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.plugin,vendetta.storage,vendetta.metro);
