import { initializeApp } from "firebase/app";
import { MessagePayload, getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBfBubTWrwfkfkFkdXC0pLXnR1Rub3cgM8",
  authDomain: "test-config-82c56.firebaseapp.com",
  projectId: "test-config-82c56",
  storageBucket: "test-config-82c56.appspot.com",
  messagingSenderId: "45479747931",
  appId: "1:45479747931:web:81732a14df9bb0fd907a7e"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BK96TDZ5pDwDNkw_SNqME_Fv9gTVEpSPhf3FojuCo8G9WP6nt3jmjysvJYgN4eelLMIVDSlGVOyjtSyaaSxOtBM",
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
}
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload:MessagePayload) => {
      resolve(payload);
    });
});