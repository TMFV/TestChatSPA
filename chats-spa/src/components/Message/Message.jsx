import styles from './Message.module.scss';
import Avatar from '../Avatar/Avatar';

function Message({}) {
  return (
    <>
      <div className={styles.Message}>
        <div className={styles.MessageContent}>
          <Avatar
            userImageSrc='./avatars-photos/will-gump.png'
            userOnline={false}
          />
          <div className={styles.MessageText}>
            <span>TXT Text message TXT</span>
          </div>
        </div>
        <span className={styles.MessageDate}>4/22/17, 7:00 AM</span>
      </div>
      <div className={styles.Message}>
        <div className={styles.MessageContentUser}>
          <div className={styles.MessageText}>
            <span>TXT Text message TXT</span>
          </div>
        </div>
        <span className={styles.MessageDateUser}>4/22/17, 7:00 AM</span>
      </div>
    </>
  );
}
export default Message;
