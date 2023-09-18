
// import firebase from "firebase/app";
// import "firebase/messaging";
// import { firebaseConfig } from '@/constant';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';


// debugger;
// //   firebase.initializeApp(firebaseConfig);
  
// //   const messaging = getMessaging(firebase.initializeApp(firebaseConfig));
// //   if (typeof window !== "undefined") {
// //     if (messaging.isSupported()) {
// //       messaging = firebase.messaging();
// //     }
// //   }

//   console.log("Notification permission granted.");
//       const app = firebase.initializeApp(firebaseConfig);
//       const messaging = getMessaging(app);
  
//   export const getMessagingToken = async () => {
//     let currentToken = "";
//     if (!messaging) return;
//     try {
//       currentToken = await getToken(messaging, {
//         vapidKey:
//           "BK96TDZ5pDwDNkw_SNqME_Fv9gTVEpSPhf3FojuCo8G9WP6nt3jmjysvJYgN4eelLMIVDSlGVOyjtSyaaSxOtBM",
//       })
//       console.log("FCM registration token", currentToken);
//     } catch (error) {
//       console.log("An error occurred while retrieving token. ", error);
//     }
//     return currentToken;
//   };
  
//   export const onMessageListener = () =>
//     new Promise((resolve) => {
//         onMessage(messaging, (payload) => {
//             console.log("Received a message: ", payload);
//             // Xử lý thông báo ở đây, ví dụ: hiển thị thông báo trên giao diện
//           });
//     });
