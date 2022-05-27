import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const DashBoardLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
      <Link
        className={`${
          match
            ? "bg-primary py-3 text-white rounded-lg hover:bg-none block text-left"
            : ""
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
};

export default DashBoardLink;
