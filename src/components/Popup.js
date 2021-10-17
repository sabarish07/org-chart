import OrgNode from "./OrgNode";
const Popup = ({ handleClose, handleSave, parentId }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <OrgNode
          item={{ name: "", title: "" }}
          reporteeEdit={handleSave}
          editFlag={true}
          parentId={parentId}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};
export default Popup;