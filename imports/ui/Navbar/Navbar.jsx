import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className={`navbar navbar-default ${this.props.className}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="javascript:void(0)">Brand</a>
          </div>
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="javascript:void(0)">Active</a></li>
              <li><a href="javascript:void(0)">Link</a></li>
              <li className="dropdown">
                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                  <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Dropdown header</li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                  <li><a href="javascript:void(0)">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="javascript:void(0)">Link</a></li>
              <li className="dropdown">
                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                  <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li className="divider"></li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  className: React.PropTypes.String,
};

export default Navbar;
