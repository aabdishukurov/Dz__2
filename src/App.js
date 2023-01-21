import React from "react";
import ToDoPage from "./page/ToDoPage";
import StyleProvider from "./provider/StyleProvider";

function App () {
  return (
    <div className="App">
      <StyleProvider/>
        <ToDoPage/>
      
    </div>
  );
}

export default App;