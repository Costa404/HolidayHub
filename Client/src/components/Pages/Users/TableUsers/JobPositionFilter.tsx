import React from "react";

interface JobPositionFilterProps {
  filterJobPosition?: string;
  setFilterJobPosition: (position: string) => void;
}

const JobPositionFilter: React.FC<JobPositionFilterProps> = ({
  filterJobPosition,
  setFilterJobPosition,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="jobFilter" className="form-label">
        Filter by Job Position
      </label>
      <select
        id="jobFilter"
        className="form-select"
        value={filterJobPosition}
        onChange={(e) => setFilterJobPosition(e.target.value)}
      >
        <option value="">All</option>
        <option value="frontend">Frontend Developers</option>
        <option value="backend">Backend Developers</option>
      </select>
    </div>
  );
};

export default JobPositionFilter;
