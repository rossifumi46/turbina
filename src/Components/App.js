import React   from "react";
import Main    from "./Main.js";
import Content from "./Content.js";
import Footer  from "./Footer.js";

import "../index.css"
import Player  from "./Player";

function App() {
    return (
        <div>
            <Main/>
            <Player/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
