function ListModels(props) {
    const deleteModel = async(model) => {
      const modelUrl = `http://localhost:8100${model.href}`;
      const fetchConfig = {
        method: "delete",
      }
      const response = await fetch(modelUrl, fetchConfig)
      if (response.ok) {
        props.getModels()
      }
    }
  return (
      <div className='container'>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
      {props.models.map(model => {
        return (
          <tr key={model.href}>
            <td>{ model.name }</td>
            <td><img src={model.picture_url} height="150" width="200"></img></td>
            <td>{ model.manufacturer.name }</td>
            <td><button className="btn btn-danger" onClick={() => deleteModel(model)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </div>
  )
}

export default ListModels
