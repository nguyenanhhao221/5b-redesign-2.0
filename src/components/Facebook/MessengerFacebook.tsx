import Script from "next/script";
import React from "react";

export const MessengerFacebook = () => {
  return (
    <div>
      {/* <!-- Messenger Chat Plugin Code --> */}
      <div id="fb-root"></div>

      {/* <!-- Your Chat Plugin code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script id="messenger-script">
        {`
          var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "107356018315479");
        chatbox.setAttribute("attribution", "biz_inbox");
      window.fbAsyncInit = function() {
          FB.init({
              xfbml            : true,
          version          : 'v15.0'
        });
      };

      (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `}
      </Script>
    </div>
  );
};
