import { initializeApp } from "firebase/app";
import { MessagePayload, getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCeVcfLxioXMTaO2jyUS3zjymGSAUeryQU",
  authDomain: "sunday-test-1aaea.firebaseapp.com",
  projectId: "sunday-test-1aaea",
  storageBucket: "sunday-test-1aaea.appspot.com",
  messagingSenderId: "436292310962",
  appId: "1:436292310962:web:ae6b086b4114d9c41db6ab",
  measurementId: "G-4RLQ7ME9QZ"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BFOE3BBFX-050ohSUT8aqeMe0nZk1PP4RczOG03sXPshCiSY6KHbzymd27YrPUieertXrutJZR0KsxfeSt7zX7w",
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