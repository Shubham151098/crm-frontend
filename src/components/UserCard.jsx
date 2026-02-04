import "../styles/allUsers.css";

const UserCard = ({ user, onToggle }) => {
  const progress =
    user.totalTasks === 0
      ? 0
      : Math.round(
          (user.completedTasks / user.totalTasks) * 100
        );

  return (
    <div className="user-card">
      <div className="user-card-header">
        <img
          src={`https://i.pravatar.cc/150?u=${user.userId}`}
          alt={user.name}
          className="avatar"
        />
        <button className="menu-btn">⋮</button>
      </div>

      <h3 className="user-name">{user.name}</h3>
      <p className="user-email">{user.email}</p>

      <div className="user-role">
        <span>Position</span>
        {user.role}
      </div>

      <div
        className={
          user.active ? "status-active" : "status-inactive"
        }
      >
        {user.active ? "ACTIVE" : "INACTIVE"}
      </div>

      <div className="progress-wrapper">
        <div className="progress-text">
          <span>Tasks</span>
          <span>
            {user.completedTasks}/{user.totalTasks}
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        className={`toggle-btn ${
          user.active ? "btn-disable" : "btn-enable"
        }`}
        onClick={() =>
          onToggle(user.userId, !user.active)
        }
      >
        {user.active ? "Disable User" : "Enable User"}
      </button>
    </div>
  );
};

export default UserCard;
