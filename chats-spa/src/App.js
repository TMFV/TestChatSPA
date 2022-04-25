import styles from './App.module.scss';
import Avatar from './components/Avatar/Avatar';
import Searching from './components/Searching/Searching';
import ChatsList from './components/ChatsList/ChatsList';
import MainToolbar from './components/MainToolbar/MainToolbar';
import Chat from './components/Chat/Chat';

function App() {
  //console.log(new Date(2022, 1, 0, 12, 13, 59, 0));
  return (
    <div className={styles.App}>
      {/* <MainToolbar /> */}
      {/* <ChatsList /> */}
      <Chat />
    </div>
  );
}

export default App;
