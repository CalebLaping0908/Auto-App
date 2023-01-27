function ListAutomobiles(props) {
    const deleteAutomobiles = async(automobiles) => {
        const automobilesUrl = `http://localhost:8080/api/automobiles/${automobiles.id}/`;
        const fetchConfig = {
            method: "delete",
        }
        const response = await fetch(automobilesUrl, fetchConfig)
        if (response.ok) {
            props.getAutomobiles();
        }
    }
    return (
        <div className='container'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Year</th>
            <th>Color</th>
            <th>Vin</th>
          </tr>
        </thead>
        <tbody>
        {props.automobiles.map(automobiles => {
          return (
            <tr key={automobiles.id}>
              <td>{ automobiles.year }</td>
              <td>{ automobiles.color }</td>
              <td>{ automobiles.vin }</td>
              <td><button onClick={() => deleteAutomobiles(automobiles)}>Delete</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    )
}

export default ListAutomobiles
