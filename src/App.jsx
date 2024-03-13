import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((res) => {
      const data = res.data.data;
      setVal(data);
    });
  }, []);

  return (
    <>
      <div className="father">
        {val.map((items, index) => {
          return (
            <div key={index} className="card">
              <img src={items.url} alt="" />
              <h2>{items.title}</h2>
              <p>{items.content}</p>
            </div>
          );
        })}
      </div>
      <h1>main</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        delectus reprehenderit aut sunt vero temporibus a ex. Culpa excepturi
        earum neque voluptatum natus accusantium! At voluptatem asperiores
        nostrum illo pariatur placeat earum nemo iste laboriosam consequuntur
        tempore accusamus voluptas expedita accusantium nobis possimus cumque
        necessitatibus obcaecati molestiae molestias, sequi dolore. Doloremque,
        doloribus? Nihil aliquam reprehenderit, velit beatae aut consectetur
        mollitia id ipsum quos minus porro doloremque aperiam possimus commodi
        laboriosam soluta ea consequuntur quam quidem blanditiis necessitatibus
        modi eum veniam? Nobis modi veniam totam. Quia dolore esse tempora quos
        sunt, reiciendis nesciunt quidem voluptate obcaecati minima ab libero
        nemo repudiandae.
      </p>
    </>
  );
}

export default App;
