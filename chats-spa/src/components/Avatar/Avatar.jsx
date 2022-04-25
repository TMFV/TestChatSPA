import styles from './Avatar.module.scss';
import OnlineIcon from '../../assets/icons/OnlineIcon';

function Avatar({ userName = 'User Name', userImageSrc, userOnline = true }) {
  return (
    <div className={styles.avatar}>
      <div className={styles.container}>
        <div className={styles.avatarIcon}>
          {userImageSrc ? (
            <img
              className={styles.avatarPhoto}
              alt={userName}
              src={userImageSrc}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.onlineIcon}>
          {userOnline ? <OnlineIcon /> : <></>}
        </div>
      </div>
    </div>
  );
}
export default Avatar;
