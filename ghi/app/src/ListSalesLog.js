function ListSalesLog(props) {
    const deleteSaleLog = async(sale_log) => {
      const sale_logUrl = `http://localhost:8090/api/sales_log/${sale_log.id}/`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(sale_logUrl, fetchConfig)
      if (response.ok) {
        props.getSalesLog()
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
          <th>VIN</th>
        </tr>
      </thead>
      <tbody>
      {props.sales_log.map(sale_log => {
        return (
          <tr key={sale_log.id}>
            <td>{ sale_log.sales_person }</td>
            <td>{ sale_log.automobile }</td>
            <td>{ sale_log.purchase_price }</td>
            <td>{ sale_log.customer }</td>
            <td><button className="btn btn-danger" onClick={() => deleteSaleLog(sale_log)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

  export default ListSalesLog
