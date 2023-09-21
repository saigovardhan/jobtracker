import React from "react";


function Home() {
  const [items, setItems] = React.useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const [warning, setWarning] = React.useState(false);
  const [created, setCreated] = React.useState(false);
  



  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.target.company.value.length > 2 &&
      e.target.title.value.length > 3 &&
      e.target.date.value !== ""
    ) {
      const newdata = {
        id: items.length + 1,
        company: e.target.company.value,
        title: e.target.title.value,
        date: e.target.date.value,
      };
    
      setItems([...items, newdata])
     localStorage.setItem("items", JSON.stringify([...items, newdata]));


      setCreated(true);
      setTimeout(() => {
        setCreated(false);
      }, 2000);
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    }
  }
    function handleDelete(id) {
      const currItems = [items.filter((item) => item.id !== id)]; 
      setItems(currItems);
      if(currItems.length>0){

        localStorage.setItem(
          "items",
          JSON.stringify([items.filter((item) => item.id !== id)])
          );
        }else{
          localStorage.setItem(
          "items",null)
        }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        {warning && (
          <div className="absolute z-50 top-20 max-w-sm rounded-md p-4  alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Invalid data!</span>
          </div>
        )}
        {created && (
          <div className="absolute z-50 top-20 max-w-sm rounded-md p-4 alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Data created!</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group card  bg-primary ">
            <div className="card-body ">
              <form
                onSubmit={handleSubmit}
                className="form-control grid grid-rows-3 space-y-2"
              >
                <input
                  id="company"
                  className="input  input-bordered w-full max-w-xs"
                  placeholder="Company"
                ></input>
                <input
                  id="title"
                  className="input  input-bordered w-full max-w-xs"
                  placeholder="Job Title"
                ></input>
                <div className="tooltip" data-tip="interview sheduled on">
                  <input id="date" type="date" className="input" />
                </div>

                {
                  <div className="card-actions justify-end">
                    <button type="submit" className="btn">
                      Add
                    </button>
                  </div>
                }
              </form>
            </div>
          </div>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="group card  bg-primary text-primary-content"
              >
                <button
                  className="btn btn-xs btn-square absolute right-2 top-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="card-body">
                  <p>Company: {item.company}</p>
                  <p>Job Title: {item.title}</p>
                  <p>Interview Date: {item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
