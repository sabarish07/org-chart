import React, {useContext, useState, useCallback} from "react";
import Context from "../store/context";
import OrgLevel from "./OrgLevel";
import Popup from "./Popup";
const Org = () => {
  //Global State and Actions
  const {state, actions} = useContext(Context);
  // Setting a dummy state and forceUpdate to prevent rerender and a method to update on state change only.
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  //Flag to open add popup
  const [isOpen, setIsOpen] = useState(false);
  //Parent Id to add reportee
  const [parentId, setParentId] = useState({});
  //Handle Popup Close
  const handleClose = () => {
    setIsOpen(false);
  };
  const reporteeEdit = (action, payload) => {
    if (action === "addReportee") {
      setParentId(payload);
      setIsOpen(true);
    } else {
      actions({type: action, payload: payload});
      forceUpdate();
    }
  };
  return (
    <div className="org-tree">
      <OrgLevel data={state} reporteeEdit={reporteeEdit} />     
      {isOpen && (
        <Popup
          handleClose={handleClose}
          handleSave={reporteeEdit}
          parentId={parentId}
        />
      )}
         
    </div>
  );
};
export default Org;
