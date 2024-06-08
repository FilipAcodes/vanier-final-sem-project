"use client";
import InputTask from "./component/InputTask";
import ToDoOutput from "./component/ToDoOutput";
import "./mainLayout.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`/api/getTask`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data || []);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [refresh]);

  return (
    <main>
      <div className="background">
        <div className="mainContainer">
          <InputTask setRefresh={setRefresh} refresh={refresh} />
          <ToDoOutput
            data={data}
            setData={setData}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </div>
      </div>
    </main>
  );
}
