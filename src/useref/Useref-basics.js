import React, { useEffect, useRef, useState } from "react";

const Userefbasics = () => {
  const [name, setName] = useState("");
  const refContainer = useRef();
  const tab1 = useRef();
  const tab2 = useRef();
  const tab3 = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = refContainer.current.value;
    setName(value);
  };
  const handleClick = (e) => {
    const current = e.target.textContent;
    if (current === "Tab1") {
      tab1.current.classList.add("show");
    } else {
      tab1.current.classList.remove("show");
    }
    if (current === "Tab2") {
      tab2.current.classList.add("show");
    } else {
      tab2.current.classList.remove("show");
    }
    if (current === "Tab3") {
      tab3.current.classList.add("show");
    } else {
      tab3.current.classList.remove("show");
    }
  };
  useEffect(() => {
    tab1.current.classList.add("show");
  }, []);
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
          <h1>{name}</h1>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleClick}>Tab1</button>
              <button onClick={handleClick}>Tab2</button>
              <button onClick={handleClick}>Tab3</button>
            </div>
            <div className="content">
              <div ref={tab1} className="item">
                <p>
                  hello tab 1 Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat praesentium ipsum vitae quidem!
                  Neque sequi tempora ipsa, cupiditate magni dignissimos!
                </p>
              </div>
              <div ref={tab2} className="item">
                <p>
                  hello tab 2 Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat praesentium ipsum vitae quidem!
                  Neque sequi tempora ipsa, cupiditate magni dignissimos!
                </p>
              </div>
              <div ref={tab3} className="item">
                <p>
                  hello tab 3 Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat praesentium ipsum vitae quidem!
                  Neque sequi tempora ipsa, cupiditate magni dignissimos!
                </p>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default Userefbasics;
