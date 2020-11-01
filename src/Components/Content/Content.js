import React from 'react';

import Info from '../Info/Info.js';
import Form from '../Form/Form.js';

import "./content.css";


const Content = () => {
  return (
    <div className="content">
      <Info/>
      <Form/>
    </div>
  )
}

export default Content;