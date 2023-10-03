import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { RejectIcon } from "./Icons";
const MyDrawer = ({
  children,
  size,
  isOpen,
  mt,
  onClose
}: {
  children: React.ReactNode;
  size: string;
  isOpen: boolean;
  mt: number;
  onClose: () => void
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  useEffect(() => {
    setIsDrawerOpen(isOpen); // Update the internal state when the prop changes.
  }, [isOpen]);

  const handleClickOutside = (e: MouseEvent) => {
    if (isDrawerOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDrawerOpen, onClose]);

  const drawerRef = React.useRef<HTMLDivElement>(null);
  return (
    <React.Fragment>
      {
        isDrawerOpen &&
        <div className={`absolute inset-0 pt-0.5 left-[300px] !z-[99999] bg-global_silver/60`}
          style={{ top: mt + "px" }}
        >
          {/* drawer body*/}
          <div ref={drawerRef} className={`float-right h-full  ${size === "sm" ? 'w-[366px]' : 'w-[79.2%] max-w-[857px]'}   bg-white relative shadow-lg`}>
            <Button onClick={onClose} isIconOnly className="!bg-white p-2  absolute -z-[1] top-[31px]  -left-10 rounded-l-full">
              <RejectIcon />
            </Button>
            {children}
          </div>
          {/* drawer body*/}
        </div>
      }
    </React.Fragment>
  );
};

export default MyDrawer;
