import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from "prop-types";

export const ItemsHowDoMovil = ({ name, description, isSelected, onClick }) => {
  const [buttonToggle, setbuttonToggle] = useState(false);
  const toggle = () => {
    setbuttonToggle((prev) => !prev);
  };
  return (
    <>
      <article>
        <button
          onClick={() => {
            toggle(), onClick();
          }}
          className="my-3 flex text-xl font-semibold justify-around items-center w-full h-[65px] rounded-Cradiu bg-white hover:bg-slate-200"
        >
          {name}
          {buttonToggle && isSelected ? (
            <FaLongArrowAltRight
              color="#1165F6"
              className="max-md:origin-center max-md:rotate-90 max-md:transition max-md:duration-300"
            />
          ) : (
            <FaLongArrowAltRight className="all transition duration-300" />
          )}
        </button>
      </article>

      {buttonToggle && (
        <article className="flex flex-col text-white my-10 items-center md:hidden">
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <button className="bg-[#25C7D9] w-[170px] h-[50px] rounded-radius mt-10">
            Find out how
          </button>
        </article>
      )}
    </>
  );
};
ItemsHowDoMovil.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};