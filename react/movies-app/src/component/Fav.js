import { Component } from "react";

class Fav extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item">Favourite Item</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
            </ul>
          </div>
         
          <div className="col-9">
          <div className="row">
          <input type="text" class="form-control" placeholder="Search" />
          <input type="text" class="form-control"/>
          </div>
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default Fav;
