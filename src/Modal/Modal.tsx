import React, { ComponentPropsWithRef } from "react";
import "./Modal.css";

interface ModalProps extends ComponentPropsWithRef<"button"> {
  active: boolean;
  setActive: (arg0: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  children,
  className,
}) => {
  return (
    <div
      className={active ? `${className} active` : `${className}`}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${className}__content active` : `${className}__content`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
