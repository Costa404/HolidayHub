import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Bem-vindo ao Vertsa Play</h1>
            <p className="lead">
              Aqui você pode gerir as suas férias e visualizar todos os
              utilizadores.
            </p>
            <div className="mt-4">
              <Link to="/calendar" className="btn btn-primary btn-lg">
                Gerir Minhas Férias
              </Link>
              <Link to="/users" className="btn btn-secondary btn-lg ms-3">
                Ver Utilizadores
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
