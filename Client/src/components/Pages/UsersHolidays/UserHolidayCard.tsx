import { Card } from "react-bootstrap";
import { Holiday } from "../../../Utility/Interface/GlobalInterface";

interface UserHolidayCardProps {
  holiday: Holiday;
}

const UserHolidayCard = ({ holiday }: UserHolidayCardProps) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
    <Card className="shadow-sm">
      <Card.Body className="text-center">
        <Card.Title className="fw-bold text-primary">
          {holiday.username}'s Holiday
        </Card.Title>
        <Card.Text className="mb-1">
          <strong>Start:</strong>{" "}
          {new Date(holiday.startDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>End:</strong> {new Date(holiday.endDate).toLocaleDateString()}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default UserHolidayCard;
