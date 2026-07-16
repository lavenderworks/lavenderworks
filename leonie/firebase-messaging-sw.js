// Firebase Messaging Service Worker

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);


// Firebase Konfiguration

firebase.initializeApp({

  apiKey: "AIzaSyD5Eec-EpfDGubP4UJ0yCVOLuREWzjLxLA",

  authDomain:
  "privaterchatleonie.firebaseapp.com",

  databaseURL:
  "https://privaterchatleonie-default-rtdb.europe-west1.firebasedatabase.app",

  projectId:
  "privaterchatleonie",

  storageBucket:
  "privaterchatleonie.firebasestorage.app",

  messagingSenderId:
  "649802569393",

  appId:
  "1:649802569393:web:12cf37862a9acb0f95f490"

});


// Messaging aktivieren

const messaging =
firebase.messaging();


// Hintergrund-Push empfangen

messaging.onBackgroundMessage(
(payload) => {


  console.log(
    "Hintergrund Nachricht:",
    payload
  );


  const title =
  payload.notification?.title
  || "PrivatChat";


  const options = {

    body:
    payload.notification?.body
    || "Neue Nachricht",

    icon:
    "/icon-192.png",

    badge:
    "/icon-192.png",

    vibrate:
    [200,100,200]

  };


  self.registration.showNotification(
    title,
    options
  );


});
