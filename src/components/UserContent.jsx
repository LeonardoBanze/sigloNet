import { randomPrice } from "../utils/utils";

const UserContent = () => {
  return (
    <div className="user-content">
      <div className="user-content-main">
        <h4 className="username">Account: Leonardo Banze</h4>

        <div className="total-content">
          <h4 className="username">Total:</h4>
          <h4 className="total">R {randomPrice().toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
