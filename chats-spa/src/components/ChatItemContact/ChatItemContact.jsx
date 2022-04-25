import styles from './ChatItemContact.module.scss';
import Avatar from '../Avatar/Avatar';

function ChatItemContact({ name = 'User Name', avatar, messages }) {
  return (
    <div className={styles.ItemContact}>
      <div className={styles.ContactContainer}>
        <div className={styles.ContactAvatar}>
          <Avatar userImageSrc='./avatars-photos/alison-smith.png' />
        </div>
        <div className={styles.ContactInfo}>
          <h4 className={styles.ContactName}>{name}</h4>
          <span className={styles.ContactMessage}>Text last message</span>
        </div>
        <div>
          <span className={styles.ContactDate}>Jun 12, 2017</span>
        </div>
      </div>
    </div>
  );
}

export default ChatItemContact;
