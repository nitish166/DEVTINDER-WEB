import PropTypes from "prop-types";

const UserCard = ({ user }) => {
    const {firstName, lastName, photoUrl, age, gender, about} = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-80 shadow-xl">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " +lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-end m-4">
        <button className="btn btn-secondary">Interested</button>
          <button className="btn btn-primary"> Ignore</button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
}

export default UserCard;
