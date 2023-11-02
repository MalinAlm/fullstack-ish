import { useState, useEffect } from "react";
import "./App.css";
import PostForm from "./components/PostForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  // const interiorItem = data.length > 0 ? data[0] : null;
  return (
    <>
      {/*
      <PostForm /> */}

      <div>
        <form action="http://localhost:3000/" method="POST">
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Category</label>
          <input type="text" name="category" required />
          <label>Price sek</label>
          <input type="text" name="price" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price (sek)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((interiorItem) => (
              <tr key={interiorItem.id}>
                <td>{interiorItem.name}</td>
                <td>{interiorItem.category}</td>
                <td>{interiorItem.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
