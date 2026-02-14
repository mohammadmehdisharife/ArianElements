import styles from "./App.module.scss"
import Btn from './components/btn/Btn';
import Input from './components/input/Input';
import Text from "./components/text/Text";

const App = () => {
  return (
    <div className={styles.container} >
      <Btn variant='primary' color='blue' >دکمه پرایمری</Btn>
      <Btn variant='secondary' color='blue' >دکمه سکنتری</Btn>
      <Input placeholder='اینجا تایپ کنید...'/>
      <Text size="lg"> این یک متن ازمایشی است</Text>
      <Text fade={true} > این یک متن ازمایشی است</Text>
    </div>
  );
}

export default App;
