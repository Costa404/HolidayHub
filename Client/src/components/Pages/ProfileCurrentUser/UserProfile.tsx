import React from "react";
import { Row, Col } from "react-bootstrap";
import { UserType } from "../../../Utility/Interface/GlobalInterface";

interface UserProfileProps {
  user: UserType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Row>
      <Col md={4} className="text-center d-flex flex-column align-items-center">
        <div
          className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
          style={{ width: "12rem", height: "12rem" }}
        >
          <span className="fs-2 fw-bold">{user.name.charAt(0)}</span>
        </div>
        <h5 className="mt-3">{user.name}</h5>
        <p className="text-muted">{user.jobposition}</p>
      </Col>
      <Col md={8}>
        <Row>
          <Col md={6}>
            <strong>Username:</strong> {user.username}
          </Col>
          <Col md={6}>
            <strong>Email:</strong> {user.email}
          </Col>
          <Col md={6}>
            <strong>Role:</strong> {user.role}
          </Col>
          <Col md={6}>
            <strong>Phone:</strong> {user.phone}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserProfile;
