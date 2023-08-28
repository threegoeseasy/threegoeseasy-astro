import { useCallback, useState } from "preact/hooks";
import { FC } from "preact/compat";
import classNames from "../utils/classNames";
import Windows95Help from "./Windows95help";

interface Windows95AppProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const VIEWPORTS = [640, 768, 1024, 1280];
const VIEWPORTS_LENGTH = VIEWPORTS.length;

const Windows95App: FC<Windows95AppProps> = ({
  title,
  icon,
  children,
  description,
  className,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const changeWidth = () => {
    const index = VIEWPORTS.indexOf(width);
    console.log(index);
    if (index === -1) {
      setWidth(VIEWPORTS[0]);
    } else if (index <= VIEWPORTS_LENGTH) {
      console.log(index);
      setWidth(VIEWPORTS[index + 1]);
    } else {
      setWidth(undefined);
    }
  };

  const minimizeFullScreen = () => {
    setIsFullScreen(false);
  };

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const openHelp = () => {
    setIsHelpOpen(true);
  };

  const closeHelp = () => {
    setIsHelpOpen(false);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  const openWindow = () => {
    setOpen(true);
  };
  if (isOpen) {
    return (
      <>
        <Windows95Help
          title={title}
          description={description}
          icon={icon}
          close={closeHelp}
          isOpen={isHelpOpen}
        />
        <article
          id="win95"
          style={{
            boxShadow: "0px 0px 0 2px #f0f0f0",
            overflow: "auto",
            // resize: "horizontal",
            width: isFullScreen ? undefined : width,
          }}
          className={classNames(
            "flex flex-col border-2 border-[#c3c3c3]",
            isFullScreen ? "fixed top-0 left-0 w-screen h-screen" : "",
            className
          )}
        >
          <div className="bg-[#1c0e80] text-[#faf9fd] h-[42px] flex items-center justify-between px-2">
            <div className="flex space-x-2 items-center">
              <div className="flex space-x-1 items-center">
                <img src={icon} alt="App Icon" className="w-8 h-auto" />
                <div className="px-1 ml-2 text-[30px]">{title}</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <img
                src="/minimize.jpg"
                className=" cursor-pointer"
                onClick={minimizeFullScreen}
              />
              <img
                src="/full-screen.jpg"
                className=" cursor-pointer"
                onClick={openFullScreen}
              />
              <img
                src="/cross.jpg"
                className=" cursor-pointer "
                onClick={closeWindow}
              />
            </div>
          </div>
          <div className="flex items-start text-[26px] bg-[#bfbfc0] text-[#0b0b0b] h-[46px] border-b-2 border-[#8E8E8E] ">
            <button
              onClick={openHelp}
              className="px-2 h-full  cursor-pointer hover:bg-gray-400"
            >
              <u>H</u>elp
            </button>
            <button
              onClick={changeWidth}
              className="px-2  h-full  cursor-pointer hover:bg-gray-400"
            >
              <u>V</u>iew
            </button>
          </div>
          <div className="flex-grow bg-white">{children}</div>
        </article>
      </>
    );
  } else {
    return (
      <div
        onClick={openWindow}
        style={{ boxShadow: "0px 0px 0 2px #f0f0f0" }}
        className="flex space-x-1 items-center p-2 my-4 pr-8 min-w-[25%] border- bg-[#bfbfc0] border-[#8E8E8E] text-black self-start"
      >
        <img src={icon} alt="App Icon" className="w-12 h-auto" />
        <div className="px-1 ml-2 text-[30px]">{title}</div>
      </div>
    );
  }
};

export default Windows95App;
