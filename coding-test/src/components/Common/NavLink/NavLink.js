import React from "react";

function NavLink({ to, className, onClick, linkName }) {
    console.log('linkName-----------',linkName)
  return (
    <div>
      <Link to={to} className={className} onClick={onClick}>
        Account
      </Link>
    </div>
  );
}

export default NavLink;
