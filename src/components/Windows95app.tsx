import { useState } from "preact/hooks";
import { FC } from "preact/compat";
import classNames from "../utils/classNames";

interface Windows95AppProps {
  title: string;
  icon: string;
}

const Windows95App: FC<Windows95AppProps> = ({ title, icon, children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeWindow = () => {
    // Perform any necessary closing logic here
  };

  return (
    <article
      style={{
        boxShadow: "0px 0px 0 2px #f0f0f0",
      }}
      className={classNames(
        "flex flex-col border-2 border-[#c3c3c3]",
        isFullScreen ? "fixed top-0 left-0 w-screen h-screen" : ""
      )}
    >
      <div className="bg-[#1c0e80] text-[#faf9fd] h-[42px] flex items-center justify-between px-2">
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-1 items-center">
            <img src={icon} alt="App Icon" className="w-4 h-4" />
            <div className="px-1 ml-2 text-[30px]">{title}</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <img
            src="/minimize.jpg"
            className=" cursor-pointer"
            // onClick={toggleFullScreen}
          />
          <img
            src="/full-screen.jpg"
            className=" cursor-pointer"
            onClick={toggleFullScreen}
          />
          <img
            src="/cross.jpg"
            className=" cursor-pointer "
            onClick={closeWindow}
          />
        </div>
      </div>
      <div className="bg-[#bfbfc0] text-[#0b0b0b] h-[46px] px-2 py-1">
        <div className="flex items-center text-[26px] space-x-2">
          <div className="px-2   cursor-pointer hover:bg-gray-400">
            <u>H</u>elp
          </div>
          <div className="px-2   cursor-pointer hover:bg-gray-400">
            <u>V</u>iew
          </div>
        </div>
      </div>
      <div className="flex-grow bg-white p-4">{children}</div>
    </article>
  );
};

export default Windows95App;
