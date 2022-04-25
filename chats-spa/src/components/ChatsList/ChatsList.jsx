import styles from './ChatsList.module.scss';
import ChatItemContact from '../ChatItemContact/ChatItemContact';

function ChatsList() {
  return (
    <div className={styles.chatList}>
      <h3 className={styles.title}>Chats</h3>
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
      <ChatItemContact />
    </div>
  );
}
export default ChatsList;
