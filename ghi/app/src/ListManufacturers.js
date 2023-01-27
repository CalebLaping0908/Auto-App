function ListManufacturers(props) {
    const deleteManufacturer = async(maker) => {
      const manufacturerUrl = `http://localhost:8100${maker.href}`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(manufacturerUrl, fetchConfig)
      if (response.ok) {
        props.getManufacturer()
      }
    }
  return (
      <div className='container'>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      {props.manufacturers.map(maker => {
        return (
          <tr key={maker.href}>
            <td>{ maker.name }</td>
            <td><button className="btn btn-danger" onClick={() => deleteManufacturer(maker)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </div>
  )
}

export default ListManufacturers
