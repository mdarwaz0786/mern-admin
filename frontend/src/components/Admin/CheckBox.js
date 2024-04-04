import React, { useState } from "react";

const CheckBox = ({ updateProductStatus, id, showStatus }) => {
  const [status, setStatus] = useState(false);

  const updateStatus = () => {
    updateProductStatus(id, !status ? "Show" : "Hide");
    setStatus(!status);
  };

  return <input style={{ width: "1rem", height: "1rem" }} type="checkbox" checked={showStatus === "Show"} data-toggle="toggle" onClick={updateStatus} />;
};

export default CheckBox;
