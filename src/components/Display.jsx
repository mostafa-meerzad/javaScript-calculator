const Display = ({ first, second, operator, result}) => {

  return (
    <div id="display" className="display">
      <div className="display__sect--small">
        {operator
          ? <div>
              {first} {operator}
            </div>
          : ""}
      </div>
      <div className="display__sect">
        {first && operator && second
          ? second
          : first && operator ? first : first ? first : result ? result : "0"}
      </div>
    </div>
  );
};

export default Display;
