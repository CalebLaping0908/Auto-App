function ListAutos(props) {
    const deleteAuto = async(auto) => {
      const autoUrl = `http://localhost:8100${auto.href}`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(autoUrl, fetchConfig)
      if (response.ok) {
        props.getAutomobiles()
      }
    }
  return (
      <div className='container'>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Year</th>
          <th>Color</th>
          <th>Make</th>
          <th>Model</th>
          <th>VIN</th>
        </tr>
      </thead>
      <tbody>
      {props.automobiles.map(auto => {
        return (
          <tr key={auto.href}>
            <td>{ auto.year }</td>
            <td>{ auto.color }</td>
            <td>{ auto.model.manufacturer.name }</td>
            <td>{ auto.model.name }</td>
            <td>{ auto.vin }</td>
            <td><button className="btn btn-danger" onClick={() => deleteAuto(auto)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </div>
  )
}

export default ListAutos
