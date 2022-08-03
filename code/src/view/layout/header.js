import judul from "../../assets/img/Judul.png";
import logo from "../../assets/img/Gmark.png";
import { useSelector, useDispatch } from "react-redux";
import { showDiscord } from "../../features/discordSlice";
import dc from "../../assets/img/dc.jpg";
export default function Header(params) {
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <nav className="  border-gray-200 bg-gray-600 opacity-75 fixed min-w-full z-40  shadow-lg px-2 md:px-4 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9  md:visible sm:invisible xs:invisible xs:-mr-4" 
              alt="Sacrifice"
            />
            <img
              src={judul}
              className="mr-3 h-6 sm:h-9  sm:visible md:invisible"
              alt="Sacrifice"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-50">
              Sacrifice
            </span> */}
          </a>

          <div
            id="mega-menu-icons"
            className="hidden justify-end items-center w-full md:flex md:w-auto md:order-1"
          >
           
          </div>
          <div className="flex items-center md:order-2">
           
            <a
              onClick={() => dispatch(showDiscord())}
              className="  flex place-items-center text-md font-bold text-white "
            >
              <span className=" mr-2">
                <img src={dc} className=" animate-pulse w-10" />
              </span>{" "}
              Discord
            </a>
          </div>
        </div>
      </nav>{" "}
    </>
  );
}
