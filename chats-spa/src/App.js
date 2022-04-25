import styles from './App.module.scss';
import Avatar from './components/Avatar/Avatar';
import Searching from './components/Searching/Searching';
import ChatsList from './components/ChatsList/ChatsList';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.MainToolbar}>
        <Avatar userImageSrc='./avatars-photos/alison-smith.png' />
        <Searching />
      </div>
      <ChatsList />
    </div>
  );
}

export default App;
