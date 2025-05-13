import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element, i) => (
        <AccordionItem
          key={element.title}
          title={element.title}
          text={element.text}
          num={i}
        ></AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
