import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <>
    <h3>Page Not Found</h3>
    <div>
      Perhaps you should return <Link to="/">Home</Link>.
    </div>
  </>
);
