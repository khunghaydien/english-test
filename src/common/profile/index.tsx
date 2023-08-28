import classNames from "classnames";
import "./index.scss";
import { Option as OptionProps } from "../field/Option";
import { useEffect, useRef, useState } from "react";
type Props = {
  className?: string;
  onChange: (value: string) => void;
  userId: string;
  userName?: string;
  userAvatar?: string;
  isOptionUp?: boolean;
};
const profile: OptionProps = {
  update: {
    icon: "icon-update",
    text: "Nâng cấp",
  },
  setting: {
    icon: "icon-settings",
    text: "Cài đặt",
  },
};
const Profile = ({
  onChange,
  userAvatar,
  userId,
  userName,
  className,
  isOptionUp = false,
}: Props) => {
  const [isOption, setIsOption] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const onClick = (value: string) => {
    setIsOption(false);
    onChange(value);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsOption(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={profileRef}
      className={classNames("profile", className, { ["active"]: isOption })}
    >
      <div className="profile-container" onClick={() => setIsOption(true)}>
        <div
          className={classNames("profile-icon", {
            ["icon-person"]: !userAvatar,
          })}
        >
          {userAvatar && <img src={userAvatar} alt={userName} />}
        </div>
        <div className="profile-name">{userId ? userName : "Setting"}</div>
      </div>
      {isOption && (
        <div
          className={classNames(
            "profile-option",
            isOptionUp ? "profile-option-up" : "profile-option-down"
          )}
        >
          <div className="profile-option-list">
            {Object.keys(profile).map((key) => (
              <div
                key={key}
                className="profile-option-item"
                onClick={() => onClick(key)}
              >
                <span className={classNames(profile[key]?.icon, "icon")}></span>
                <span className="profile-option-item--text">
                  {profile[key]?.text}
                </span>
              </div>
            ))}
          </div>
          <div className="profile-option-logout">
            <div
              className="profile-option-item"
              onClick={() => onClick("logout")}
            >
              <span className="icon-exit_to_app icon"></span>
              Đăng xuất
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
