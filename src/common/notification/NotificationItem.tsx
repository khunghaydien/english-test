import { Notification } from "@/store/reducer/user/notification"

type Props = {
    notification: Notification
}
const NotificationItem = ({ notification }: Props) => {
    const currentTime = Math.floor(new Date().getTime() / 1000)

    const timeUnits = ["giây", "phút", "giờ", "ngày", "tuần"];
    const timeFactors = [60, 60, 24, 7];

    let timeDifferenceInSeconds = Math.floor((currentTime - notification.sentTime));
    let unitIndex = 0;

    while (timeDifferenceInSeconds >= timeFactors[unitIndex] && unitIndex < timeUnits.length - 1) {
        timeDifferenceInSeconds /= timeFactors[unitIndex];
        unitIndex++;
    }

    const timeAgo = `${Math.floor(timeDifferenceInSeconds)} ${timeUnits[unitIndex]} trước`;
    const renderItem = () => <>
        <div className="content">
            <span className="title">{notification.title}</span>
            <span> : </span>
            <span>{notification.body}</span>
            <div className="time-ago">{timeAgo}</div>
        </div>
        {!notification.isRead && <div className="not-read"></div>}
    </>
    return (
        <div className="d-flex gap-10 notification-item">
            <div className="notification-item--avatar icon-person">
            </div>
            <div className="notification-item--content d-flex align-items-center justify-content-space-between">
                {renderItem()}
            </div>
        </div>
    )
}
export default NotificationItem