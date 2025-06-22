import {
  Stack,
  Col,
  Row,
  Container,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmployeeHeader({ employeeId, firstName, lastName }) {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-light shadow-sm">
        <Container fluid>
          <Row className="align-items-center py-2">
            {/* Left Side - Navigation */}
            <Col md="auto" className="d-flex align-items-center">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="item1">Nav 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="item2">Nav 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Right Side - User Info */}
            <Col className="text-end d-flex align-items-center justify-content-end gap-3">
              <span>
                {firstName} {lastName}
              </span>
              <div className="vr" />
              <span className="text-muted">{employeeId}</span>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default EmployeeHeader;

// <header className="bg-light shadow-sm px-0 py-2">
//   <Row className="justify-content-center p-0">
//     <Stack direction="horizontal" gap={3} className="px-0 flex-wrap">
//       <div>
//         <Nav justify variant="tabs" className="align-items-center">
//           <Nav.Item>
//             <Nav.Link eventKey="home">Home</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="align-items-center">
//             <Dropdown as={NavItem}>
//               <Dropdown.Toggle as={NavLink}>Employees</Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item>View All</Dropdown.Item>
//                 <Dropdown.Item>Add New</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav.Item>
//           <Nav.Item className="align-items-center">
//             <Dropdown as={NavItem}>
//               <Dropdown.Toggle as={NavLink}>Departments</Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item>View All</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav.Item>
//         </Nav>
//       </div>
//       <div className="p-2 ms-auto">
//         {firstName} {lastName}
//       </div>
//       <div className="vr" />
//       <div> {employeeId} </div>
//     </Stack>
//   </Row>
// </header>
