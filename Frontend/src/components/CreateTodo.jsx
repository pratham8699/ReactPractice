import { useCallback, useState } from "react";

export function CreateTodo(props) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            const value = e.target.value;
            settitle(e.target.value);
          }}
        ></input>
        <br />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            const value = e.target.value;
            setdescription(e.target.value);
          }}
        ></input>
        <br />
        <button
          onClick={async () => {
            fetch("http://localhost:4000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async (res) => {
              const json = await res.json();
              alert("Todo added");
            });
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

// module.exports = CreateTodo;
