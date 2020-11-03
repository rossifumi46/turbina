import React   from "react";
import Main  from "../Main/Main.js";
import Content from "../Content/Content.js";
import Footer from "../Footer/Footer.js";

import "./../../index.css"

function App() {
  return (
    <div className="root">
      {/* <Main/> */}
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
