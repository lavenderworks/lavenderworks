importScripts(
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);

importScripts(
"https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);


firebase.initializeApp({

    apiKey:"DEIN_API_KEY",
    authDomain:"privaterchatleonie.firebaseapp.com",
    projectId:"privaterchatleonie",
    messagingSenderId:"649802569393",
    appId:"1:649802569393:web:12cf37862a9acb0f95f490"

});


const messaging =
firebase.messaging();


messaging.onBackgroundMessage(
(payload)=>{


self.registration.showNotification(
payload.notification.title,
{
body:
payload.notification.body,

icon:
"/icon-192.png"

}
);


});
