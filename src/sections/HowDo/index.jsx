import { useState } from "react";
import { ItemsHowDoMovil, ItemsHowDo } from "./components";

const ItemDo = [
  {
    name: "Digital talent review",
    description:
      "Ensuring your talent evolves simultaneously is critical in a rapidly changing technological landscape.<strong> With our Digital Talent Review,</strong> power your digital transformation by understanding your current digital skills, forecasting talent needs, and strategizing your talent roadmap.",
  },
  {
    name: "Training academies",
    description:
      "EmTech Institute caters to professionals in corporations needing professional development in different technology areas. <strong>Our academies</strong> are designed to keep pace with the rapid evolution of technology, offering a cutting-edge learning experience.",
  },
  {
    name: "Centers of excellence",
    description:
      "While technology provides the necessary infrastructure and tools, <strong>we offer specialized expertise and strategic guidance </strong> to ensure successful implementation, thus maximizing return on investment and positive business impact.",
  },
  {
    name: "Talent acquisition",
    description:
      "<strong>We power technology talent acquisition</strong> by blending deep understanding, strategic sourcing, and holistic evaluation we tailor our services to meet the unique needs of each client, ensuring a perfect fit between the talent and the corporate culture.",
  },
  {
    name: "Talent ecosystems",
    description:
      "<strong>EmTech Institute works with </strong> governments, foundations, and universities to empower underserved populations with crucial technology skills, enabling them to access rewarding careers in the tech sector and contribute meaningfully to the competitiveness of their communities.",
  },
];

const HowDo = () => {
  const [selectedItem, setSelectedItem] = useState(ItemDo[1]);
  const [buttonToggle, setButtonToggle] = useState(true);
  return (
    <section className="bg-blue-600 md:flex">
      <article className="md:w-3/4 p-10 md:px-28">
        <header className="text-white">
          <h2 className="font-bold text-4xl my-5">How do we do it?</h2>
          <h3 className="font-normal my-5">
            At EmTech Institute, we offer a wide range of services designed to
            meet the diverse needs of today’s businesses and individuals.
          </h3>
        </header>
        {ItemDo.map((item) => (
          <ItemsHowDoMovil
            key={item.name}
            name={item.name}
            description={item.description}
            isSelected={selectedItem.name === item.name}
            onClick={() => {
              setSelectedItem(item);
              setButtonToggle(true);
            }}
          />
        ))}
      </article>

      <article className="md:w-1/2 bg-backGround bg-cover bg-no-repeat bg-center">
        {ItemDo.map((item) => (
          <ItemsHowDo
            key={item.name}
            description={item.description}
            isVisible={buttonToggle && selectedItem.name === item.name}
          />
        ))}
      </article>
    </section>
  );
};

export default HowDo;