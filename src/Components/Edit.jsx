import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const redirect = useNavigate();
  const [anEmployee, setAnEmployee] = useState(""); //gor holding full data of the employee

  //Create separate state for all items in employee object
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const { id } = useParams();
  console.log(id); //will get the id of the employee

  //api call to fetch the date of employee using the particular idea
  const fetchEmployee = async () => {
    const response = await axios.get(
      "http://localhost:8000/getAnEmployee/" + id
    );
    console.log(response.data.employee);
    setAnEmployee(response.data.employee);
    setEmpId(response.data.employee.id);
    setEmpName(response.data.employee.name);
    setEmpAge(response.data.employee.age);
    setEmpDesignation(response.data.employee.designation);
    setEmpSalary(response.data.employee.salary);
  };

  //function assigned in the update button for updating details
  const handleUpdate = async () => {
    //api call for updating
    const body = {
      id: empId,
      name: empName,
      age: empAge,
      designation: empDesignation,
      salary: empSalary,
    };
    const result = await axios.post(
      "http://localhost:8000/updateAnEmployee/" + id,
      body
    );
    console.log(result);
    alert(result.data.message);
    redirect("/");
  };

  console.log(anEmployee);
  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <h3 className="text-center m-5">Update Employee</h3>
        <div
          style={{ padding: "30px", border: "2px solid orange" }}
          className="form w-50"
        >
          <MDBInput
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            label="Id"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            label="Name"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            value={empAge}
            onChange={(e) => setEmpAge(e.target.value)}
            label="Age"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            value={empDesignation}
            onChange={(e) => setEmpDesignation(e.target.value)}
            label="Designation"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            value={empSalary}
            onChange={(e) => setEmpSalary(e.target.value)}
            label="Salary"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="mt-3"
          >
            <Link to={"/"}>
              <MDBBtn color="warning"> Back To Home</MDBBtn>
            </Link>
            <MDBBtn onClick={(e) => handleUpdate(e)} color="success">
              Update details
            </MDBBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
