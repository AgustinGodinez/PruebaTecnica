import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CardStudents } from "./CardStudents";

export default function OurStudensts() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStudents(data.results);
      } catch (error) {
        console.log("Error fetching users: ", error);
      }
    };
    getData();
  }, []);

  return (
    <section className="p-10">
      <h2 className="font-bold text-C4xl text-Cblue">Our students</h2>
      <article className="my-10">
        <Carousel
          leftControl={<FaArrowLeft color="#00215B" size={24} />}
          rightControl={<FaArrowRight color="#00215B" size={24} />}
          className="md:hidden"
        >
          {students.map((student) => (
            <CardStudents
              key={student.name.first}
              student={student}
              isGrid={false}
            />
          ))}
        </Carousel>
        <div className="grid grid-cols-2 max-md:hidden place-self-center">
          {students.map((student) => (
            <CardStudents
              key={student.name.first}
              student={student}
              isGrid={true}
            />
          ))}
        </div>
      </article>
    </section>
  );
}