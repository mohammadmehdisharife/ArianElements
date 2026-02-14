import styles from "./App.module.scss"
import Btn from './components/btn/Btn';
import Input from './components/input/Input';

const App = () => {
  return (
    <div className={styles.container} >
      <Btn variant='primary' color='blue' >دکمه پرایمری</Btn>
      <Btn variant='secondary' color='blue' >دکمه سکنتری</Btn>
      <hr />
      <Input placeholder='اینجا تایپ کنید...'/>
    </div>
  );
}

export default App;
