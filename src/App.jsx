import styles from "./App.module.scss"
import Btn from './components/btn/Btn';
import Card from "./components/card/Card";
import Input from './components/input/Input';
import Text from "./components/text/Text";
import Badge from "./components/badge/Badge";

const App = () => {
  return (
    <div className={styles.container} >
      <Btn variant='primary' color='blue' >دکمه پرایمری</Btn>
      <Btn variant='secondary' color='blue' >دکمه سکنتری</Btn>
      <Input placeholder='اینجا تایپ کنید...'/>
      <Text size="lg"> این یک متن ازمایشی است</Text>
      <Text fade={true} > این یک متن ازمایشی است</Text>
      <Card className={styles.card} >
        <Text>کارت</Text>
      </Card>
      <Badge variant="dot" size="md"/>
      <Badge variant='standard'>استاندارد</Badge>
      <Badge variant="outline">اوت لاین</Badge>
    </div>
  );
}

export default App;
