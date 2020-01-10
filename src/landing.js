import React from 'react';
import './style.css';

import Expresso from './util/Expresso';

import Menu from './menu';
import Employee from './employee';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      menus: []
    };
  }

  componentDidMount() {
    Expresso.getMenus().then(menus => {
      if (menus.length) {
        const sortedMenus = this.sortItemNames(menus, 'title');
        this.setState({menus: sortedMenus});
      }
    });

    Expresso.getEmployees().then(employees => {
      if (employees.length) {
        const sortedEmployees = this.sortItemNames(employees, 'name');
        this.setState({employees: sortedEmployees});
      }
    });
  }

  sortItemNames(items, field) {
    return items.sort((item1, item2) => {
      if (item2[field].toLowerCase() < item1[field].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  renderMenus() {
    return this.state.menus.map(menu => {
      return <Menu className="item" key={menu.id} />;
    });
  }

  renderEmployees() {
    return this.state.employees.map(employee => {
      return <Employee className="item" key={employee.id} />;
    });
  }

  render() {
    return (
      <div className="Landing">
        <h2>MANAGE MENUS</h2>

        <div className="menu item-list">
          {this.renderMenus()}
        </div>

        <div className="button">ADD</div>
        <h2>MANAGE EMPLOYEES</h2>

        <div className="employee item-list">
          {this.renderEmployees()}
        </div>
        <div className="button">ADD</div>
      </div>
    );
  }
}

export default Landing;
