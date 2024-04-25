import { useState } from "react";

export default function AccordionItem({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`accordion-item ${isOpen && "selected"}`}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <div className="top">
        <p className={`num ${isOpen && "selected"}`}>
          {num < 9 ? `0${num + 1}` : num + 1}
        </p>
        <p className={`title ${isOpen && "selected"}`}>{title}</p>
        <span className={`toggle ${isOpen && "selected"}`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <p className="bottom">{text}</p>}
    </div>
  );
}
