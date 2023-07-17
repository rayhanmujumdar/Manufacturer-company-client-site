import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`${
        match
          ? "bg-primary text-white rounded-lg hover:bg-none"
          : "active:bg-transparent hover:bg-transparent"
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
