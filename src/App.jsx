import styles from "./App.module.scss"
import Btn from './components/btn/Btn';
import Card from "./components/card/Card";
import Input from './components/input/Input';
import Text from "./components/text/Text";
import Badge from "./components/badge/Badge";
import Progress from "./components/progress/Progress";
import Tooltip from "./components/tooltip/Tooltip";
import Switch from "./components/switch/Switch";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false)
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
      <Badge variant="dot"/>
      <Badge variant='standard' size="sm">استاندارد</Badge>
      <Badge variant="outline" size="sm">اوت لاین</Badge>
      <Progress value={30} color="blue" size="md" />
      <Tooltip content={"این یک کارت کوچک است"} >
        <Card color="" >راهنمای کوچک</Card>
      </Tooltip>
      <Switch 
        checked={isActive}
        onChange={setIsActive}
        color="blue"
      />
      <Text>وضعیت: {isActive ? 'روشن' : 'خاموش'}</Text>      

      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
