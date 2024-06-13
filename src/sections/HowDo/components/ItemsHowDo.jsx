import PropTypes from "prop-types";

export const ItemsHowDo = ({ description, isVisible }) => {
  return (
    <>
      {isVisible && (
        <article className="flex flex-col justify-center text-white px-10 h-full max-md:hidden">
          <hr className="h-0.5 w-1/3 bg-Cblue mb-10" />
          <p
            className="font-normal text-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <button className="bg-[#25C7D9] w-[170px] h-[50px] rounded-Cradiu mt-10">
            Find out how
          </button>
        </article>
      )}
    </>
  );
};
ItemsHowDo.propTypes = {
  description: PropTypes.string,
  isVisible: PropTypes.bool,
};