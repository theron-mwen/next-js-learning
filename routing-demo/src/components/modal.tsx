"use client";

import { ReactNode, useEffect } from "react";

type ModalProps = {
  //   open: boolean;
  //   onClose: () => void;
  //   title?: string;
  //   children: ReactNode;
};

export default function Modal({children}:{children: ReactNode}) {
  // { open, onClose, title, children }: ModalProps)
//   useEffect(() => {
//     const onEsc = (event: KeyboardEvent) => {
//       if (event.key === "Escape") onClose();
//     };

//     if (open) {
//       document.addEventListener("keydown", onEsc);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.removeEventListener("keydown", onEsc);
//       document.body.style.overflow = "";
//     };
//   }, [open, onClose]);

//   if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    //   onClick={onClose}
    >
      {children}
    </div>
  );
}
