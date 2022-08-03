import React from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="header border-bottom-1">
      <div className="tabs">
        <a className="tab-items">Inventory</a>
        <a className="tab-items">Orders</a>
        <a className="tab-items">Vouchers</a>
      </div>

      <div className="avatar" onClick={(e) => navigate("/")}>
        
      </div>
    </header>
  );
};

export default MainHeader;
