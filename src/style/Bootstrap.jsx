
function Bootstrap() {
  return (
    <>
     {/* <div className="container bg-danger">
          <div className="row">
            <div className="col">
                <p className="h3 text-light text-center">
                    Container
                </p>
            </div>
          </div>
     </div>
     <div className="container-fluid my-2">
        <div className="row my-2">
            <div className="col bg-warning text-center text-danger border border-1">Col 6</div>
            <div className="col bg-warning text-center text-danger border border-1">Col 6</div>
        </div>
        <div className="row my-2">
            <div className="col bg-secondary text-center text-light border border-2">COL 4</div>
            <div className="col bg-secondary text-center text-light border border-2">COL 4</div>
            <div className="col bg-secondary text-center text-light border border-2">COL 4</div>
        </div>
        <div className="row my-2">
           <div className="col-4 bg-success text-center text-light border border-2">COL 4</div>
           <div className="col-8 bg-success text-center text-light border border-2">COL 8</div>
        </div>
     </div> */}
     {/* <div className="container">
        <div className="row">
            <div className="col col-md-6 col-sm-8 bg-warning text-center text-danger">COL - 4 </div>
            <div className="col col-md-6 col-sm-8 bg-warning text-center text-danger">COL - 4 </div>
            <div className="col col-md-6 col-sm-8 bg-warning text-center text-danger">COL - 4 </div>
        </div>
     </div>
      */}

      {/* <div className="container">
         <div className="row">
            <div className="col-4">
                <form action="" >
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="text" placeholder="fill" className="form-control my-2" />
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <input type="submit" value="Reset" className="btn btn-danger ms-2" />
                </form>
            </div>
         </div>
      </div> */}

      {/* <div className="container">
         <div className="row">
            <div className="col-6 my-2">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action disabled">Name : Sanjay </li>
                    <li className="list-group-item list-group-item-action">Email : Sanjay@123.com</li>
                    <li className="list-group-item list-group-item-action">Contact :8989898980</li>
                    <li className="list-group-item list-group-item-action">Address : Mumbai , MH 400566</li>
                </ul>
            </div>
         </div>
      </div> */}

      <div className="container">
        <div className="row">
            <div className="col-6">
                {/* <table className="table bg-dark text-light table-bordered table-striped">
                      <tr scope="row">
                        <td scope="col">SR</td>
                        <td scope="col">NAME</td>
                        <td scope="col">AGE</td>
                      </tr>
                      <tr scope="row">
                        <td scope="col">1</td>
                        <td scope="col">Ajay</td>
                        <td scope="col">23</td>
                      </tr>
                      <tr scope="row">
                        <td scope="col">2</td>
                        <td scope="col">Vijay</td>
                        <td scope="col">24</td>
                      </tr>
                </table>  */}
              <table className="table table-striped table-bordered table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
      </div>
    </>
  )
}

export default Bootstrap