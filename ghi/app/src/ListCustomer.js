function ListCustomer(props) {
    const deleteCustomer = async(customer) => {
      const customerUrl = `http://localhost:8090/apicustomer/${customer.id}/`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(customerUrl, fetchConfig)
      if (response.ok) {
        props.getCustomer()
      }
    }
    return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
      {props.customer.map(customer => {
        return (
          <tr key={customer.id}>
            <td>{ customer.name }</td>
            <td>{ customer.address }</td>
            <td>{ customer.phone_number }</td>
            <td><button onClick={() => deleteCustomer(customer)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

  export default ListCustomer
