import { useCallback, useMemo } from "preact/hooks";
import s from "./Window95.module.css";
import { Image } from "@astrojs/image/components";
import buttons from "./buttons.png";
import bin from "./bin.png";
import defragmentation from "./defragmentation.png";
import folder from "./folder.png";
import { createPortal } from "preact/compat";
import useModal from "./Modal/Modal";
import { ComponentChildren } from "preact";

export default function Window95({
  link,
  fitToContent = false,
  children,
  title = "ControlPanel" + Math.random().toString().split(".")[1],
  helpContent,
}: {
  link?: string;
  fitToContent?: boolean;
  children: ComponentChildren;
  title: string;
  helpContent: ComponentChildren;
}) {
  const dimensions = useMemo(() => {
    return {
      width: !fitToContent ? 768 + 500 * Math.random() : undefined,
      height: !fitToContent ? 480 + 500 * Math.random() : undefined,
      maxWidth: fitToContent ? 400 : undefined,
      margin: 300 * Math.random(),
      overflow: "hidden",
      position: "relative",
    };
  }, [fitToContent]);

  const picture = useMemo(() => {
    const pictures = [bin, defragmentation, folder];
    const picNumber = Math.round((pictures.length - 1) * Math.random());
    return pictures[picNumber];
  }, []);

  const { Modal, isOpen, open, close } = useModal();

  return (
    <div className={s.root} style={{ ...dimensions }}>
      <Modal isOpen={isOpen} close={close} title="Help">
        {helpContent}
      </Modal>
      <div className={s.upperPanel}>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Image
            alt="window icon"
            src={picture}
            width={30}
            height={30}
            class={s.icon}
          />
          <h4 style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
            {title}
          </h4>
        </span>

        <Image alt="like windows close" src={buttons} height={30} width={91} />
      </div>
      <div id="controls" className={s.controls}>
        <span
          onClick={() => link && window.open(link, "_blank")}
          class={s.control}
        >
          <u>V</u>iew
        </span>
        <span key={1} onClick={open} className={s.control}>
          <u>H</u>elp
        </span>
      </div>
      {children}
    </div>
  );
}
