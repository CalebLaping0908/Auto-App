function ListSalesPerson(props) {
    const deleteSalesPerson = async(sales_person) => {
      const sales_personUrl = `http://localhost:8090/api/sales/${sales_person.id}/`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(sales_personUrl, fetchConfig)
      if (response.ok) {
        props.getSalesPerson()
      }
    }
    return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee Number</th>
        </tr>
      </thead>
      <tbody>
      {props.sales_person.map(sales_person => {
        return (
          <tr key={sales_person.id}>
            <td>{ sales_person.name }</td>
            <td>{ sales_person.employee_number }</td>
            <td><button onClick={() => deleteSalesPerson(sales_person)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

  export default ListSalesPerson
