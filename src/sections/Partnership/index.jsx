import { Carousel } from "flowbite-react";
const itemImages = [
  {
    src: "/santander.webp",
    alt: "Santander Logo",
  },
  {
    src: "https://conpas.net/wp-content/uploads/2020/06/Salesforce-emblema.png",
    alt: "salesforce logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bd16/9ab1/e87e17dfbe179e642fdd6b275be18b7f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpEVNjejsqFIAeCUBT5MR96E7Ctksk0aHn3chHQv15yjaNDTI4RBesS08Bjpl0OYccIVTLg1xOU2IpCoBGpGkZSYG8V98NCzN7u~tGmgECfqPqmD3t~aJ4ypw3pOQAsFcHEdTVtCy-w6N~qan9o9QkzN0wf0kfN26CfO~EDRSAl5TlOonGbobJblI9qtVB1JS~is3JE-vN2SznWJTMJGG~oZxa8Nm5ChNifvZlOgEiLLcQOPLut5HlcIemjEDVv~wq38lIwUjT6uGivmWHOav4uTV8I-Dy83fiYYDDIuDwN6tO~oB6tVTTYLN2wb5gZG3cwhQmV7ZUkJA5gchQd2bQ__",
    alt: "Uiversia Logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/9540/376d/2d83853243dd4a1bb7f195b806eb36a7?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMazgIhm1f9HY6SnPEB6Flmjo~a9no83YcqP29X3-CQbsXmfqhakcWL49JSwLcmPLC65q5liw1xJlkGmU0yC83OCuwNMIUpFW2FqqVK7FD8ny~7TOKuzfQ8XdwJXrsSACMEEQzIX3RorIxwpJBaf16mP7Fcs9bvEFL5DClFg4JRK0J1FjYUCdOt8DkeaP-CHZThmUVQSEeaEa-GRwEHTCpxuAOsRW8A~j~IzG56tN4TEOlwGLMv8iF-1X5CVi0gYif4UqHfEQI-OQAlpe6nEXLni6NXRWTc4vsSC831F3bbgDW5WI0ENNlX9q08PbUfyf74bTEa9z5xPTaAeAsukHw__",
    alt: "Experis Academy ManpowerGroup Logo",
  },
];

export default function Partnership() {
  const groupImages = (images, groupSize) => {
    let result = [];
    for (let i = 0; i < images.length; i += groupSize) {
      result.push(images.slice(i, i + groupSize));
    }
    return result;
  };

  const groupedImages = groupImages(itemImages, 2);

  return (
    <section className="p-10 bg-Cblue items-center text-center md:flex xl:px-96">
      <h2 className="font-light text-xl xl:text-3xl text-white ">
        Partnership with companies <br /> all over the world.
      </h2>
      <div className="h-56 w-3/4 m-auto ">
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          {groupedImages.map((group, index) => (
            <div key={index} className="flex h-full justify-center">
              {group.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className={`h-full w-1/2 object-contain ${
                    item.alt !== "salesforce logo" ? "filter-white" : ""
                  }`}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}