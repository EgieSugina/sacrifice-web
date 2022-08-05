import Discord from "./component/discord";
import Header from "./layout/header";
import shia from "../assets/img/20.png";
import dk from "../assets/img/14.png";
import striker from "../assets/img/15.png";
import lahn from "../assets/img/18.png";
import witch from "../assets/img/11.png";
import musa from "../assets/img/6.png";
import bocit from "../assets/img/10000000001770715.bmp";
import BgModal from "../assets/img/large-icon.png";

import { SendOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import Request from "./component/request";
import React from "react";
type Staff = {
  fm?: string;
  quotes?: string;
  imgs?: string;
};
export default function Home(params: any) {
  const [selectImages, setselectImages] = useState([]);
  const Image = [
    "https://media.discordapp.net/attachments/701868786998837288/978970532844302367/2019-04-23_55440860.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/977555175701110824/2022-05-21_5558152.JPG?width=1291&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/971484147459698779/IMG-20220505-WA0001.jpg?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/968908662980620349/2022-04-27_29326918.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/712440431438331964/2019-11-03_328870748.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/710634639164964945/2020-05-15_13308778.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/759442689891631134/2020-09-26_17157701.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/761595932276949002/2020-10-02_7816030.JPG?width=1213&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/761596576615366746/2020-10-02_23964713.PNG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/802953230983495680/Screenshot_1.png?width=1089&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/969028474880806912/2022-04-27_48004224.JPG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/1004054225384378490/2020-10-03_340272678.PNG?width=1214&height=683",
    "https://media.discordapp.net/attachments/701868786998837288/1004054468779835503/2022-06-05_1331685492.JPG?width=1214&height=683",
  ];
  function getMultipleRandom(arr: string[], num: number | undefined) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  useEffect(() => {
    var data: any = getMultipleRandom(Image, 9);
    return setselectImages(data);
  }, []);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const Staff: React.FunctionComponent<Staff> = ({ fm, quotes, imgs }) => {
    return (
      <>
        <div className="  w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-screen" src={imgs} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {fm}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {quotes}
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header />

      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        bodyStyle={{
          backgroundImage: "url("+BgModal+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }}
      >
        <Request />
      </Modal>
      <Discord />
      {/* <Discord /> */}
      <section className="header relative items-center ">
        <div className="flex flex-wrap flex-column-center place-content-center place-items-center">
          <div className=" w-1/3 xl:w-1/3  sm:w-full  sm:px-15 xs:w-full xs:px-3 xs:pt-10  js-show-on-scroll">
            <div className="info text-align-left  ">
              <div className=" text-gray-50 text-lg">
                {/* <img src={judul} className=" w-8/12 xl:visible sm:invisible" /> */}
                <h1 className=" pt-10 font-bold text-4xl text-gray-50 pb-4">
                  Sacrifice - Indonesia Guild
                </h1>
                <span className=" text-2xl font-bold text-red-500 italic">
                  Sacrifice{" "}
                </span>
                adalah guild PvX santuy nan asik dimana semua member dibebaskan
                untuk bermain sesuai dengan playstyle masing-masing.
                <p className="pb-4">
                  {" "}
                  Mau <span className="   font-bold text-red-500  ">PvP </span>?
                  Monggooo.
                </p>
                <p className="pb-4">
                  Mau{" "}
                  <span className="   font-bold text-yellow-500  ">PvE </span>?
                  Silahkan grinding sampe gila.{" "}
                </p>
                <p className="pb-4">
                  Mau{" "}
                  <span className="   font-bold text-green-500  ">
                    Life Skill{" "}
                  </span>
                  ? Bebas!.
                </p>
                <p className="pb-4">
                  Semua player boleh join! Newbie, veteran, returner, semuanya
                  boleh! Member kami selalu membantu satu sama lain, jadi ga
                  perlu khawatir nyasar saat bermain.
                </p>
                <p className="pb-4">
                  Sacrifice juga mengadakan aktifitas guild untuk mempererat
                  hubungan antar-member, Node War {"("}T1{")"}, Miru party, dan
                  lain-lainnya.
                </p>
                <p className="pb-4">
                  Ga ada syarat aneh-aneh untuk join, cukup aktif dan loyal
                  saja!
                </p>
                <p className="pb-4">
                  Ga ada minimum GS! Yuk join! Langsung join Discord kita atau
                  bisa langsung whisper makhluk-makhluk gaib di bawah.
                </p>
                <Button
                  type="primary"
                  className=" bg-red-600 border-red-600 animate-bounce mt-10"
                  shape="round"
                  icon={<SendOutlined />}
                  onClick={showModal}
                >
                  Send Request
                </Button>
                {/* <ul className="list-disc ml-10">
                  <li className=" font-semibold text-xl">No GS Requirement</li>
                  <li className=" font-semibold text-xl">
                    Share Ilmu Combat {"&"} Life Skill Lainnya
                  </li>
                  <li className=" font-semibold text-xl">Learning PVP</li>
                  <li className=" font-semibold text-xl">Weekly Vell</li>
                  <li className=" font-semibold text-xl">Khalk Hunting</li>
                  <li className=" font-semibold text-xl">Skill Guild Max</li>
                </ul> */}
                {/* <div className="mt-12 anim-button">
                <button className="draw anim-button github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Draw
                </button>
              </div> */}
              </div>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/2 sm:w-full xs:w-full  gap-4  ">
            <div className="grid-cols-3 p-20 space-y-2 xs:p-1 lg:p-20   lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
              <div className="w-full rounded">
                {selectImages[0] && <img src={selectImages[0]} alt="image" />}
              </div>
              <div className="w-full col-span-2 row-span-2 rounded">
                {selectImages[1] && <img src={selectImages[1]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[2] && <img src={selectImages[2]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[3] && <img src={selectImages[3]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[4] && <img src={selectImages[4]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[5] && <img src={selectImages[5]} alt="image" />}
              </div>
              <div className="w-full col-span-2 row-span-2 rounded">
                {selectImages[6] && <img src={selectImages[6]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[7] && <img src={selectImages[7]} alt="image" />}
              </div>
              <div className="w-full rounded">
                {selectImages[8] && <img src={selectImages[8]} alt="image" />}
              </div>
            </div>
          </div>
          <div className=" w-5/6 gap-4  py-5  js-show-on-scroll">
            <h1 className=" pt-10  text-white italic font-bold text-4xl">
              Contact Family
            </h1>
            <div className="grid-cols-6 p-20 space-y-2  xs:p-1  lg:space-y-0 lg:grid lg:gap-3   gap-2">
              <Staff
                fm="SumTingWong"
                imgs={shia}
                quotes=" Diam Menjadi Beban, Bergerak Nyusahin Orang."
              />
              <Staff
                fm="Garasi"
                imgs={musa}
                quotes="Topup Membuat Game Menjadi Lebih Indah"
              />
              <Staff
                fm="Retrieveer"
                imgs={dk}
                quotes="Tetap Menyerah dan Jangan Semangat"
              />
              <Staff fm="Bocit" imgs={bocit} quotes=" " />
              <Staff fm="Mayali" imgs={striker} quotes="Pantek" />
              <Staff fm="Gallar" imgs={lahn} quotes=" " />
              <Staff fm="Veresta" imgs={witch} quotes=" " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
