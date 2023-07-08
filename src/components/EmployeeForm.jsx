// import React from 'react'

// const EmployeeForm = () => {
//   return (
//     <div>EmployeeForm</div>
//   )
// }

// export default EmployeeForm
import React from 'react';

function EmployeeForm() {
  // Add your form logic here

  return (
    <div>
      <h1 className="mt-4">Employee Form</h1>
      <form className="mt-4">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input type="text" className="form-control" placeholder="Enter designation" />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" className="form-control" placeholder="Enter location" />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input type="text" className="form-control" placeholder="Enter salary" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;