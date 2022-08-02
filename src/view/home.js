import Discord from "./component/discord";
import Header from "./layout/header";
import judul from "../assets/img/Judul.png";
import LOGO from "../assets/img/Gmark.png";
import { useSelector, useDispatch } from "react-redux";
export default function Home(params) {
  const open = useSelector((state) => state.discord.value);
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
    "",
    "",
  ];
  return (
    <>
      <Header />
      {open && <Discord />}
      {/* <Discord /> */}
      <section className="header relative items-center grid grid-cols-4 gap-4 pt-28">
        <div className="container mx-auto items-center col-span-2  col-start-1  ">
          <div className=" ml-56">
            <div className=" pt-20 sm:pt-0">
              <img src={judul} className=" w-8/12" />
              <h1 className=" pt-10 font-bold text-4xl">Indonesia Guild</h1>
              <ul className="list-disc ml-10">
                <li className=" font-semibold text-xl">No GS Requirement</li>
                <li className=" font-semibold text-xl">
                  Share Ilmu Combat {"&"} Life Skill Lainnya
                </li>
                <li className=" font-semibold text-xl">Learning PVP</li>
                <li className=" font-semibold text-xl">Weekly Vell</li>
                <li className=" font-semibold text-xl">Khalk Hunting</li>
                <li className=" font-semibold text-xl">Skill Guild Max</li>
              </ul>
              {/* <div className="mt-12 anim-button">
                <button className="draw anim-button github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Draw
                </button>
              </div> */}
            </div>
            <div className=" pt-20 sm:pt-0">
              <h1 className=" pt-10 font-bold text-4xl">Officer</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 left-40 ">
          <img className=" aspect-square w-full " src={Image[0]} />
          <img className=" aspect-square w-full " src={Image[1]} />
          <img className=" aspect-square w-full " src={Image[2]} />
          <img className="col-span-2 aspect-square w-full " src={Image[4]} />
          <img className=" aspect-square w-full " src={Image[3]} />
          <img className=" aspect-square w-full " src={Image[5]} />
          <img className=" aspect-square w-full " src={Image[6]} />
          <img className=" aspect-square w-full " src={Image[7]} />
          <img className=" aspect-square w-full " src={Image[9]} />
          <img className="col-span-2 aspect-square w-full " src={Image[8]} />
          <img className=" aspect-square w-full " src={Image[10]} />
          <img className=" aspect-square w-full " src={Image[11]} />
          <img className=" aspect-square w-full " src={Image[12]} />
        </div>
      </section>
    </>
  );
}
