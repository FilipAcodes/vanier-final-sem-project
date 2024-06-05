import InputTask from "./component/InputTask";
import ToDoOutput from "./component/ToDoOutput";
import "./mainLayout.css";

export default function Home() {
  return (
    <main>
      <div className="mainContainer">
        <InputTask />
        <ToDoOutput />
      </div>
    </main>
  );
}
