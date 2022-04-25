import styles from './MainToolbar.module.scss';
import Avatar from '../Avatar/Avatar';
import Searching from '../Searching/Searching';

function MainToolbar() {
  return (
    <div className={styles.ToolbarContainer}>
      <div className={styles.MainToolbar}>
        <div className={styles.ToolbarAvatar}>
          <Avatar userImageSrc='./avatars-photos/alison-smith.png' />
        </div>
        <Searching />
      </div>
    </div>
  );
}

export default MainToolbar;
