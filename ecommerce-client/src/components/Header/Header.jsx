import React from "react";

import Navbar from "./Navbar/Navbar";
import Navbar2 from "./Navbar/Navbar2";
const Header = ({user, setUser}) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Navbar2 />
    </div>
  );
};

export default Header;
