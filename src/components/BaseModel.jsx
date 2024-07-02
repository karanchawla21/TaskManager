import "./BaseModel.css";

const BaseModel = ({ isOpen, isClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close-button" onClick={isClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModel;