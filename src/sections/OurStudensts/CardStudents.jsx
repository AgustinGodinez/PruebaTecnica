import PropTypes from "prop-types";

export const CardStudents = ({ student, isGrid }) => {
  return (
    <div
      className={`flex m-auto ${
        isGrid ? "items-center pl-10" : "flex-col items-center"
      }`}
    >
      <figure className={`flex ${isGrid ? "items-center" : "flex-col"}`}>
        <img
          src={student.picture.large}
          alt={`${student.name.first} ${student.name.last}`}
          className="rounded-full h-full w-[140px] py-2 m-auto"
        />
        <figcaption className={`text-center ${isGrid ? "text-center" : ""}`}>
          <h2 className="font-semibold text-xl py-2">{`${student.name.first} ${student.name.last}`}</h2>
          <h3 className="font-semibold text-base py-2">
            {student.location.state}
          </h3>
          <p className="font-semibold text-xl text-[#C2C2C2]">
            {student.location.state}, {student.location.country}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
CardStudents.propTypes = {
  student: PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    location: PropTypes.shape({
      state: PropTypes.string,
      country: PropTypes.string,
    }),
  }),
  isGrid: PropTypes.bool,
};