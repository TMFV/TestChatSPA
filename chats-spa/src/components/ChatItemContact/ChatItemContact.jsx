import styles from './ChatItemContact.module.scss';
import Avatar from '../Avatar/Avatar';

function ChatItemContact() {
  return (
    <div className={styles.ItemContact}>
      <div className={styles.ContactAvatar}>
        <Avatar userImageSrc='./avatars-photos/alison-smith.png' />
      </div>
      <div className={styles.ContactInfo}>
        <h4 className={styles.ContactName}>Alison Smith</h4>
        <span className={styles.ContactMessage}>Text last message</span>
      </div>
    </div>
  );
}

export default ChatItemContact;
