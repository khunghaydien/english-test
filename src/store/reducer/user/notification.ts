import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type Notification ={
    title: string, 
    body: string,
    sentTime: number, 
    isRead?: boolean,
    timeAgo?: string,
};
type State = {
  notification: Notification[];
};
const initialState: State = {
    notification:[],
};

const notification = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state: State, action: PayloadAction<Notification>) => {
      const {sentTime} = action.payload;
      const isNotificationExists = state.notification.some((notif) => notif.sentTime === sentTime );
      if(!isNotificationExists) state.notification.push(action.payload);
    },
  },
});

export const { addNotification } = notification.actions;
export default notification.reducer;
