import React   from "react";
import Header  from "../Header/Header.js";
import Form    from "../Form/Form.js";

import "./../../index.css"
import Content from "../Content/Content";
function App() {
  return (
    <div className="root">
      <Header className="header"/>
      <Content/>
    </div>
  );
}

export default App;
