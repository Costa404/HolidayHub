import { Card } from "react-bootstrap";
import useGetHolidays from "../../../../Api/get/getHolidays";
import LoadingSpinner from "../../../../Utility/Loading/LoadingSpinner";

interface HolidaysListProps {
  userId: number | undefined;
}

const HolidaysList: React.FC<HolidaysListProps> = ({ userId }) => {
  const { holidays, isLoading } = useGetHolidays();

  const filteredHolidays = holidays.filter(
    (holiday) => holiday.userid === userId
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Holidays</h2>

      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : filteredHolidays.length === 0 ? (
        <p className="text-center text-muted">No holidays registered yet.</p>
      ) : (
        <div className="row">
          {filteredHolidays.map((holiday) => (
            <div key={holiday.id} className="col-md-6 col-lg-4 mb-3">
              <Card className="shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold text-primary">
                    Holidays
                  </Card.Title>
                  <Card.Text className="mb-1">
                    <strong>Start:</strong>{" "}
                    {new Date(holiday.startDate).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text>
                    <strong>End:</strong>{" "}
                    {new Date(holiday.endDate).toLocaleDateString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HolidaysList;
