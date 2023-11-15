import { Link } from "react-router-dom";

const Layout = ({ children, url , ...rest }) => {
  return <div {...rest}>
    <div>
        <Link to={url}>atras</Link>
    </div>
    {children}</div>;
};

export default Layout;
