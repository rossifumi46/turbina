import React   from "react";
import Main    from "./Main.js";
import Content from "./Content.js";
import Footer  from "./Footer.js";

import "../index.css"

function App() {
  return (
    <div className="root">
      <Main/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;
