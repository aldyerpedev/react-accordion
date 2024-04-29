import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          num={index}
          title={faq.title}
          key={faq.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}
