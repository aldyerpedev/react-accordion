import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          num={index}
          title={faq.title}
          text={faq.text}
          key={faq.title}
        />
      ))}
    </div>
  );
}
