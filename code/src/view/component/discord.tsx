import { Drawer } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDiscord } from "../../features/discordSlice";
export declare type Placement = 'left' | 'right' | 'top' | 'bottom';
export default function Discord() {
  const [visible, setVisible] = useState(true);
  const [placement, setPlacement] = useState<Placement>("right");
  const dispatch = useDispatch();
  const open = useSelector((state:any) => state.discord.value);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    dispatch(showDiscord())
  };

  const onChange = (e:any) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Drawer
       className=" bg-transparent"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={open}
        key={placement}
      >
        <iframe
          src={"https://discord.com/widget?id=298777142643261442&theme=dark"}
          className=" h-full w-full"
           
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </Drawer>
    </>
  );
}
