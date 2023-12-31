import "./AdminPage.css";
const AdminPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand p-2" id="brand">
          Admin Area
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <a className="nav-link" href="/StudentOperations">
                Student Operations
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="/InstructorOperations">
                Instructor Operations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" id = "logOut">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { AdminPage };
