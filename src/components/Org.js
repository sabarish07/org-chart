import React, { useContext, useState } from "react";
import Context from "../store/context";
import OrgLevel from "./OrgLevel";
import Popup from "./Popup";
const Org = () => {
  const { state, actions } = useContext(Context);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [isOpen, setIsOpen] = useState(false);
  const [parentId, setParentId] = useState({});
  const handleClose = () => {
    setIsOpen(false);
  };
  const reporteeEdit = (action, payload) => {
    if (action === "addReportee") {
      console.log("add parentId");
      setParentId(payload);
      setIsOpen(true);
    } else {
      actions({ type: action, payload: payload });
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
