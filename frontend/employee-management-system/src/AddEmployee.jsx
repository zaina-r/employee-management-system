import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function AddEmployee() {
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");

  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-5">Add New Employee</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="employee-id">Employee Id</InputGroup.Text>
          <Form.Control
            aria-label="employee-id"
            aria-describedby="employee-id"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>First and last name</InputGroup.Text>
          <Form.Control aria-label="First name" />
          <Form.Control aria-label="Last name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Department"
            id="department"
            onSelect={(eventKey) => setDepartment(eventKey)}
          >
            <Dropdown.Item eventKey="Engineering">Engineering</Dropdown.Item>
            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
            <Dropdown.Item eventKey="Human Resources">
              Human Resources
            </Dropdown.Item>
            <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
            <Dropdown.Item eventKey="Product">Product</Dropdown.Item>
            <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="department" value={department} readOnly />
        </InputGroup>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Designation"
            id="designation"
            onSelect={(eventKey) => setDesignation(eventKey)}
          >
            <Dropdown.Item eventKey="">Clear</Dropdown.Item>
            <Dropdown.Item eventKey="Customer Support Representative">
              Customer Support Representativer
            </Dropdown.Item>
            <Dropdown.Item eventKey="Data Analyst">Data Analyst</Dropdown.Item>
            <Dropdown.Item eventKey="HR Manager">HR Manager</Dropdown.Item>
            <Dropdown.Item eventKey="Marketing Head">
              Marketing Head
            </Dropdown.Item>
            <Dropdown.Item eventKey="Product Manager">
              Product Manager
            </Dropdown.Item>
            <Dropdown.Item eventKey="QA Engineer">QA Engineer</Dropdown.Item>
            <Dropdown.Item eventKey="Sales Representative">
              Sales Representative
            </Dropdown.Item>
            <Dropdown.Item eventKey="Software Engineer">
              Software Engineer
            </Dropdown.Item>
            <Dropdown.Item eventKey="Team Lead">Team Lead</Dropdown.Item>
            <Dropdown.Item eventKey="UX Designer">UX Designer</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="designation" value={designation} readOnly />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="email-address">Email</InputGroup.Text>
          <Form.Control
            type="email"
            aria-label="email"
            aria-describedby="eail-address"
          />
              </InputGroup>
                      <InputGroup className="mb-3">
          <InputGroup.Text>Username and Password</InputGroup.Text>
          <Form.Control aria-label="First name" readOnly />
          <Form.Control aria-label="Last name" readOnly />
        </InputGroup>
              <InputGroup className="mb-3"></InputGroup>
                    <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Allow Admin Role"
      />
      </Container>
    </>
  );
}

export default AddEmployee;
