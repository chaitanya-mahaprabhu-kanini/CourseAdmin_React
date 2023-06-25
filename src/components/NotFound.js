import './NotFound.css'
const NotFound = (props) => {
  return (
    <>
      <div
        className = "d-flex align-items-center justify-content-center"
        id = "nfencompass">
            
        <div className="card text-center"
        id = "nf">
          <div className="card-body">
            <h1 className="card-title">404</h1>
            <h4 className="card-text">Page Not Found</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export { NotFound };
