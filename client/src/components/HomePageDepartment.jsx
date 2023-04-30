import React from "react";
import "./DepartmentComponent.css";

const HomePageDepartment = () => {
  return (
    <section className="department">
      <div role="tabpanel">
        <div className="dep-sec-nav ab-cnter">
          <ul className="nav nav-tabs" role="tablist">
            {/* Add the tabs here */}
          </ul>
        </div>

        <div className="tab-content">{/* Add the tab content here */}</div>
      </div>
    </section>
  );
};

export default HomePageDepartment;
