import TableUsers from "./TableUsers/TableUsers";

const Users = () => {
  return (
    <section className="w-100 d-flex justify-content-center">
      <div
        className="d-flex flex-column w-75 backgroundMobile vh-100  p-5 "
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <TableUsers />
      </div>
    </section>
  );
};

export default Users;
