import "./Welcome.css";
const Welcome = () => {
  const clickHandler = (event) => {
    window.location = '\choice';
  }

  const adminClickHandler = (event) => {
    window.location = '\AdminLogin';
  }
  
  return (
    <>
      <div id="cover">
        <div id = "banner">
            <h1 style = {{marginBottom: '2rem'}}>UpSkill</h1>
            <h4>Best Courses From The Best Instructors</h4>

            <button className = "btn btn-success mt-5 btn-lg ps-5 pe-5" onClick = {clickHandler}>Jump In</button>
            <button className = "btn btn-secondary mt-3" onClick = {adminClickHandler}>Admin Login</button>
        </div>
      </div>
    </>
  );
};

export { Welcome };
