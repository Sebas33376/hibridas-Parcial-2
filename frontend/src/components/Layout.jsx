import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, url , ...rest }) => {
  return <div {...rest}>
    <div>
        <Link to={url}>atras</Link>
    </div>
    {children}</div>;
};

export default Layout;
