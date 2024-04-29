export default function AccordionItem({
  title,
  num,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = curOpen === num;
  function handleOpen() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`accordion-item ${isOpen && "selected"}`}
      onClick={handleOpen}
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
      {isOpen && <p className="bottom">{children}</p>}
    </div>
  );
}
