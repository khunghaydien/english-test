import { initializeApp } from "firebase/app";
import { getMessaging, getToken , onMessage} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBfBubTWrwfkfkFkdXC0pLXnR1Rub3cgM8",
    authDomain: "test-config-82c56.firebaseapp.com",
    projectId: "test-config-82c56",
    storageBucket: "test-config-82c56.appspot.com",
    messagingSenderId: "45479747931",
    appId: "1:45479747931:web:81732a14df9bb0fd907a7e"
};

function requestPermissiona() {

  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BK96TDZ5pDwDNkw_SNqME_Fv9gTVEpSPhf3FojuCo8G9WP6nt3jmjysvJYgN4eelLMIVDSlGVOyjtSyaaSxOtBM",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
          onMessage(messaging, (payload) => {
            console.log("Received a message: ", payload);
            // Xử lý thông báo ở đây, ví dụ: hiển thị thông báo trên giao diện
          });
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export const getMessagingToken = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          
          getToken(messaging, {
            vapidKey:
              "BK96TDZ5pDwDNkw_SNqME_Fv9gTVEpSPhf3FojuCo8G9WP6nt3jmjysvJYgN4eelLMIVDSlGVOyjtSyaaSxOtBM",
          }).then((currentToken) => {
            if (currentToken) {
              debugger;
              console.log("new_currentToken: ", currentToken);
            } else {
              console.log("Can not get token");
            }
          });
        } else {
          console.log("Do not have permission!");
        }
      });
}

export const onMessageListener = () => {
  debugger;
    onMessage(messaging, (payload) => {
      debugger;
        alert(payload)
        console.log("Received a message: ", payload);
        // Xử lý thông báo ở đây, ví dụ: hiển thị thông báo trên giao diện
      });
}

// requestPermissiona();
