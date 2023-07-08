import { createPortal } from "preact/compat";
import s from "../Window95.module.css";
import { useState } from "preact/hooks";
import button from "./button.png";
import { ComponentChildren } from "preact";
import { Image } from "@astrojs/image/components";

function Modal({
  children,
  isOpen,
  close,
  title,
}: {
  children: ComponentChildren;
  isOpen: boolean;
  close: () => void;
  title: string;
}) {
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            style={{
              left: 24,
              top: 0,
            }}
            className={s.portal}
          >
            <div
              style={{
                height: 28,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "grey",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  marginLeft: 12,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {title}
              </div>
              <Image
                // onClick={close}
                alt="like windows close"
                src={button}
                height={26}
                width={28}
              />
            </div>
            {children}
          </div>,
          document.getElementById("controls")!
        )}
    </>
  );
}

export default function useModal() {
  const [showModal, setShowModal] = useState(false);

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);
  const isOpen = showModal;

  return {
    Modal,
    close,
    open,
    isOpen,
  };
}
