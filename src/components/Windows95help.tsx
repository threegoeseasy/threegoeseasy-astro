import { useCallback, useState } from "preact/hooks";
import { FC } from "preact/compat";
import classNames from "../utils/classNames";

interface Windows95HelpProps {
  title: string;
  icon: string;
  description: string;
  close: () => void;
  className?: string;
  isOpen: boolean;
}

const Windows95Help: FC<Windows95HelpProps> = ({
  title,
  icon,
  className,
  description,
  close,
  isOpen,
}) => {
  return (
    <aside
      id="win95"
      style={{
        boxShadow: "0px 0px 0 2px #f0f0f0",
        overflow: "auto",
        // resize: "horizontal",
      }}
      className={classNames(
        isOpen ? "flex" : "hidden",
        " flex-col border-2 border-[#c3c3c3] max-w-xs max-h-[640px] fixed right-0 top-0 z-50",
        className
      )}
    >
      <div className="bg-[#1c0e80] text-[#faf9fd] h-[42px] flex items-center justify-between px-2">
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-1 items-center">
            <img src="/help.png" alt="App Icon" className="w-8 h-8" />
            <div className="px-1 ml-2 text-[30px]">Help</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <img src="/cross.jpg" className=" cursor-pointer " onClick={close} />
        </div>
      </div>

      <div className="flex-grow bg-[#fcfbe0] p-4">
        <img src={icon} alt="App Icon" className="w-24 h-auto" />
        <h1 className="mt-8">{title}</h1>
        <p className="mt-4">{description}</p>
      </div>
    </aside>
  );
};

export default Windows95Help;
