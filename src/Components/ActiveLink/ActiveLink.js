import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'bg-indigo-500 text-white px-2 py-1 md:px-4 md:py-2 rounded' : 'hover:bg-indigo-500 hover:px-2 hover:py-1 hover:md:px-4 hover:md:py-2 hover:rounded hover:text-white'}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default ActiveLink;