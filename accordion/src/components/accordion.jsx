import { useState } from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex == index ? null : index);
    }

  return !items || (items.length === 0) ? "no items available" : (
    <div className="accordion">
      {items.map((items, index) => (
        <div key={index} className="accordion-item">
            <button className="accordion-title" onClick={() => handleToggle(index)}>
                {items.title}
                {openIndex === index ? <ChevronUp className="right" /> :
                <ChevronDown className="right" />}
            </button>
            {openIndex === index && <div className="accordion-content">
                {items.content}
            </div>}
        </div>
      ))}
    </div>
  );
}
