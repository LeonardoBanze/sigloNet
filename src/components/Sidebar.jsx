import { Fragment } from "react";
import GroupSvg from "../assets/svg/Group.svg";
import { randomDate, randomPrice, randomQuantity } from "../utils/utils";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidelist">
        <div className="search">
          <input type="search" name="" id="" placeholder="Search" />

          <button className="sidelist-btn">
            <img src={GroupSvg} sizes={10} />
          </button>
        </div>

        {list.map((item, index) => (
          <div className="items" key={index}>
            <div className="items-row">
              <span className="items-date">{item.date}</span>
              <span className="items-value">{item.value}</span>
            </div>

            <div className="items-row">
              <span className="items-status">{item.status}</span>
              <span className="items-quantity">{item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const list = [
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
  {
    date: randomDate(),
    value: `R ${randomPrice().toFixed(2)}`,
    status: "Active",
    quantity: randomQuantity(),
  },
];

export default Sidebar;
