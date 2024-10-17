import React, { useState } from "react";
import {
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  Transition,
} from "@headlessui/react";
import { X } from "lucide-react";
import { ButtonIcon } from "../buttons";

export interface DialogProps {
  children?:
    | React.ReactNode
    | ((props: { isOpen: boolean; close: () => void }) => React.ReactNode);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: React.ReactElement<any, string>;
  title: string;
  subtitle: string;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  trigger,
  title,
  subtitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          onClick: () => setIsOpen(true),
        })}
      <HeadlessDialog unmount={false} open={isOpen} onClose={handleClose}>
        <Transition show={isOpen}>
          <div className="fixed left-0 top-0 z-20 min-h-full w-full bg-[#00000096] p-2 transition duration-150 ease-out data-[closed]:opacity-0" />
        </Transition>
        <div className="fixed left-0 top-0 z-30 flex min-h-full w-full items-center justify-center p-2">
          <HeadlessDialogPanel
            transition
            className="relative w-full max-w-md rounded-2xl bg-primary duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="p-6">
              <h4>{title}</h4>
              <p className="mt-1.5 text-muted">{subtitle}</p>
              <div className="mt-6">
                {typeof children === "function"
                  ? children?.({ isOpen, close: handleClose })
                  : children}
              </div>
            </div>
            <ButtonIcon
              icon={X}
              className="absolute right-5 top-5"
              onClick={handleClose}
            />
          </HeadlessDialogPanel>
        </div>
      </HeadlessDialog>
    </>
  );
};

export default Dialog;
