function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = curOpen === num;

  function handleToogle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div>
      <div className={`item ${isOpen ? "open" : ""}  `} onClick={handleToogle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{children}</div>}
      </div>
    </div>
  );
}

export default AccordionItem;
