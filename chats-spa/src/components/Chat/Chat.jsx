import styles from './Chat.module.scss';
import Avatar from '../Avatar/Avatar';
import Message from '../Message/Message';

function Chat({}) {
  return (
    <div className={styles.Chat}>
      <div className={styles.ChatHeader}>
        <div className={styles.ChatAvatar}>
          <Avatar userImageSrc='./avatars-photos/will-gump.png' userOnline />
        </div>
        <h4>User Name</h4>
      </div>
      <div className={styles.ChatHeader}></div>
      <Message />
    </div>
  );
}

export default Chat;
