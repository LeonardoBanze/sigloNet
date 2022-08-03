import { randomPrice, randomQuantity } from "../utils/utils";

const Table = () => {
  return (
    <div className="table-re sponsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Barcode</th>
            <th>Make</th>
            <th>IMEi no.</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr className="table-row">
              <td>{item.name}</td>
              <td>{item.barcode}</td>
              <td>{item.make}</td>
              <td>{item.imei}</td>
              <td>R {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const list = [
  {
    name: "John Doe",
    barcode: randomQuantity() * 100,
    make: randomQuantity() * 10,
    imei: "Active",
    price: randomPrice().toFixed(2),
  },
  {
    name: "John Doe",
    barcode: randomQuantity() * 10,
    make: randomQuantity() * 10,
    imei: "Active",
    price: randomPrice().toFixed(2),
  },
];

export default Table;
