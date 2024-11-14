import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      <ul>
        {data.map((faq, index) => (
          <Item
            title={faq.title}
            key={index}
            index={index}
            currOpen={currOpen}
            onSetCurrentOpen={setCurrentOpen}
          >
            {faq.text}
          </Item>
        ))}
        <Item
          title="Text 1"
          key="text 1"
          index={23}
          currOpen={currOpen}
          onSetCurrentOpen={setCurrentOpen}
        >
          {" "}
          <h3>learn react</h3>
          <ul>
            <li>React UI component</li>
            <li>component reusability</li>
            <li>learn state well</li>
          </ul>
        </Item>
      </ul>
    </div>
  );
}
function Item({ index, currOpen, onSetCurrentOpen, title, children }) {
  const model = currOpen === index;
  function handleModal() {
    onSetCurrentOpen(model ? null : index);
  }

  return (
    <li className={model ? "item open" : "item"} onClick={handleModal}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{model ? "-" : "+"}</p>
      {model && (
        <div className="content-box">
          <p>{children}</p>
        </div>
      )}
    </li>
  );
}
