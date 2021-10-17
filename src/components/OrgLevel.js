
import React, { Fragment } from "react";
import OrgNode from "./OrgNode";

const OrgLevel = ({ data, reporteeEdit }) => {
  return (
    <>
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <Fragment key={item.id}>
              <li>
                <OrgNode item={item} reporteeEdit={reporteeEdit} />
                {item.children && (
                  <OrgLevel data={item.children} reporteeEdit={reporteeEdit} />
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      )}
    </>
  );
};

export default OrgLevel;
