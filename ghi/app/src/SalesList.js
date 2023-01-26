function ListSalesRecords(props) {
    const deleteShoe = async(sales_record) => {
      const sales_recordUrl = `http://localhost:8090/api/sales_log/${sales_record.id}/`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(sales_recordUrl, fetchConfig)
      if (response.ok) {
        props.getSalesRecords()
      }
    }






        return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Automobile</th>
              <th>Purchase Price</th>
              <th>Customer</th>
              <th>Vin</th>
            </tr>
          </thead>
          <tbody>
          {props.sales_records.map(sales_records => {
            console.log(sales_records)
            return (
              <tr key={sales_records.href}>
                <td>{ sales_records.manufacturer }</td>
                <td>{ sales_records.model_name }</td>
                <td>{ sales_records.color }</td>
                <td>{ sales_records.bin }</td>
                <td><button onClick={() => deleteShoe(sales_records)}>Delete</button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      )
  }

  export default ListSalesRecords
