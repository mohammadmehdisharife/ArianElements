import Btn from "./components/btn/Btn";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import Text from "./components/text/Text";
import Badge from "./components/badge/Badge";
import Progress from "./components/progress/Progress";
import Tooltip from "./components/tooltip/Tooltip";
import Switch from "./components/switch/Switch";
import IconBtn from "./components/iconbtn/IconBtn";
import Toast from "./components/toast/Toast";
import Img from "./components/img/Img";
import Drawer from "./components/drawer/Drawer";
import Modal from "./components/modal/Modal";
import Copy from "./components/copy/Cpoy"
import Carousel from "./components/carousel/Carousel";

// no needed
import styles from "./App.module.scss";
import { FaUser, FaHome, FaCog, FaTrash } from "react-icons/fa";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const items = ['آیتم ۱', 'آیتم ۲', 'آیتم ۳', 'آیتم ۴', 'آیتم ۵'];

  return (
    <div className={styles.container}>
      <Btn variant="primary">
        دکمه پرایمری
      </Btn>
      <Btn variant="secondary">
        دکمه سکنتری
      </Btn>
      <Input placeholder="اینجا تایپ کنید..." />
      <Text size="lg"> این یک متن ازمایشی است</Text>
      <Text fade={true}> این یک متن ازمایشی است</Text>
      <Card className={styles.card}>
        <Text>کارت</Text>
      </Card>
      <Badge variant="dot" size="lg" />
      <Badge variant="standard" size="sm">
        استاندارد
      </Badge>
      <Badge variant="outline" size="sm">
        اوت لاین
      </Badge>

      <Progress value={30} size="md" />
      <br />

      <Tooltip position="top" content={"این یک کارت کوچک است"}>
        <Card>راهنمای کوچک</Card>
      </Tooltip>

      <Switch checked={isActive} onChange={setIsActive} />
      <Text>وضعیت: {isActive ? "روشن" : "خاموش"}</Text>

      <IconBtn size="lg" variant="primary">
        <FaUser />
      </IconBtn>
      <IconBtn size="md" variant="secondary">
        <FaTrash />
      </IconBtn>

      ‌<Btn onClick={() => setShowToast(true)}>نمایش توست</Btn>
      <Toast
        show={showToast}
        duration={2000}
        onClose={() => setShowToast(false)}
      >
        <Text>شما کلیک کردید</Text>
      </Toast>

      <Card className={styles.card} style={{ padding: "0px 0px 10px 0px" }} >
        <Img
          width="100%"
          height="100%"
          src="https://thumbs.dreamstime.com/b/red-fox-animal-forest-winter-season-its-surrounding-environment-displaying-rusty-red-color-fur-head-eyes-ears-167935340.jpg"
          objectFit="cover"
        ></Img>
        <Text>کامپوننت عکس</Text>
      </Card>

      <Btn onClick={() => setShowDrawer(true)}>باز کردن دراور</Btn>
      <Drawer
        show={showDrawer}
        onClose={() => setShowDrawer(false)}
        position="right"
        width={350}
      >
        <div>
          <Btn
            onClick={() => setShowDrawer(false)}
            style={{ marginTop: "20px", width: "100%" }}
          >
            بستن
          </Btn>
        </div>
      </Drawer>

      <Btn onClick={() => setShowModal(true)}>باز کردن مودال</Btn>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="تایید اطلاعات"
        size="md"
        showCloseButton={true}
      >
          <Card style={{ marginBottom: "15px" }}>
            <Text >اطلاعات</Text>
          </Card>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
          >
            <Btn color="red" onClick={() => setShowModal(false)}>
              انصراف
            </Btn>
            <Btn color="green" onClick={() => alert("تایید شد!")}>
              تایید
            </Btn>
          </div>
      </Modal>

      <Copy text="user_123"> 
        <Card>روی متن کلیک کن تا کپی بشه</Card>
      </Copy>

      <Carousel slidesPerView={2} width={"800px"}>
          <Card className={styles.item} >اولین</Card>
          <Card className={styles.item} >دومین</Card>
          <Card className={styles.item} >سومین</Card>
          <Card className={styles.item} >چهارمین</Card>
          <Card className={styles.item} >پنجمین</Card>
          <Card className={styles.item} >اخرین</Card>
      </Carousel>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
