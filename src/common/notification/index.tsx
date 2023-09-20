import classNames from "classnames"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import NotificationItem from "./NotificationItem"
import { useEffect, useRef, useState } from "react"
import './index.scss'
const NotificationComponent = () => {
    const notifications = useSelector((state: RootState) => state.user.notification.notification)
    const { t } = useTranslation();
    const [isShowNotification, setIsShowNotification] = useState(false)
    const [isShowALlNotification, setIsShowALlNotification] = useState(true)
    const notificationRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsShowNotification(false)
            }
        }
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])
    return (
        <div className={classNames('position-relative')} ref={notificationRef}>
            <div
                className={classNames("icon-bell notification-icon icon")}
                onClick={() => setIsShowNotification(true)}
            ></div>
            {isShowNotification &&
                <div className="notification">
                    <div className="notification-header">
                        <div className="d-flex align-items-center justify-content-space-between m-b-10">
                            <div className="notification-header--title">{t('Txt_Notification')}</div>
                            <div className="notification-header--more-action">...</div>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <div className={classNames('notification-btn', { ['active']: isShowALlNotification })} onClick={() => setIsShowALlNotification(true)}>{t('Txt_All')}</div>
                            <div className={classNames('notification-btn', { ['active']: !isShowALlNotification })} onClick={() => setIsShowALlNotification(false)}>{t('Txt_Not_Read')}</div>
                        </div>
                    </div>
                    <div className="notification-body">
                        <div className="d-flex align-items-center justify-content-space-between m-b-10">
                            <div className="">{t('Txt_New')}</div>
                            <div className="">{t('Txt_See_All')}</div>
                        </div>
                        {notifications.map((item, idx) => (
                            <NotificationItem key={idx} notification={item} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
export default NotificationComponent