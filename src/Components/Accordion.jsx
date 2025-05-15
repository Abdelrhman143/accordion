import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, isCuropen] = useState(null);

  return (
    <div className="accordion">
      {data.map((element, i) => (
        <AccordionItem
          key={element.title}
          title={element.title}
          num={i}
          curOpen={curOpen}
          onOpen={isCuropen}
        >
          {element.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
