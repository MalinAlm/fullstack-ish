import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Button clicked", name, category, price);
    const interiorInput = {
      name,
      category,
      price,
    };

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(interiorInput),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("The response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error, submit not done", error);
      });

    setName("");
    setCategory("");
    setPrice("");
  };

  return (
    <>
      <Home />
      <div>
        <form method="POST" onSubmit={handleOnSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
          <label>Category</label>
          <input
            type="text"
            name="category"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            required
          />
          <label>Price sek</label>
          <input
            type="text"
            name="price"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
            required
          />
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
