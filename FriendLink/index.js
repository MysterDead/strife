(function(e,t,a,i,n){"use strict";const{FormSection:r,FormSwitchRow:o,FormRow:l}=i.Forms;function c(){return React.createElement(a.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(r,{title:"Show in",titleStyleType:"no_border"},React.createElement(o,{label:"User profile",subLabel:"Show invite button in user profile. When you click you send a friend invite link to selected user as message",leading:React.createElement(l.Icon,{source:n.getAssetIDByName("ic_members")})}),React.createElement(o,{label:"Friend Tab",subLabel:"Show invite button as toolbox in friends tab",leading:React.createElement(l.Icon,{source:n.getAssetIDByName("friends_toast_icon")})})))}var s={onLoad:function(){t.logger.log("Hello world!")},onUnload:function(){t.logger.log("Goodbye, world.")},settings:c};return e.default=s,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets);
