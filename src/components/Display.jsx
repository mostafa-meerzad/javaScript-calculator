
const Display = ({ first, second, operator, result }) => {

  const display = document.getElementById('display')
  console.log(display);
 
  return (
    <div
      id="display"
  className={first.length > 8 ? "display small": 'display'}

    >
      {first && operator && second
        ? <div >
            {first} {operator} {second}
          </div>
        : first && operator
          ? <div >
              {first} {operator}
            </div>
          : first
            ? <div >
                {first}
              </div>
            : result
              ? <div>
                  {result}
                </div>
              : <div>0</div>}
    </div>
  );
};

export default Display;
