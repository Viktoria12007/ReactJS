import Icon from "../../../Icons/components/Icon";
import style from "./UserBlock.module.css";

interface IUserBlockProps {
    avatarSrc?: string,
    userName?: string,
    userStatus?: string,
}

export default function UserBlock ({avatarSrc, userName, userStatus}: IUserBlockProps) {
    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&state=my_random_string&redirect_uri=http://localhost:5173/auth&duration=permanent&scope=read submit identity`} className={style.userBox}>
            <div className={style.avatarBox}>
                {avatarSrc ? <img src={avatarSrc} alt="user avatar" className={style.avatarImage}/>
                    : <Icon name="anonIcon" size={50} />}
            </div>
            <div className={style.username}>
                {userStatus === 'loading'
                    ? <span style={{ color: '#999999' }}>Загрузка...</span>
                    : <span style={userName ? { color: '#333333' } : { color: '#999999' }}>{userName || 'Аноним'}</span>
                }
            </div>
       </a>
    )
}
