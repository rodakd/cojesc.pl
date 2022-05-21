import * as React from "react";
import { Link } from "remix";

export const Header: React.FC = () => {
    return (
        <div className="p-5 flex items-center justify-center relative">
            <Link to="/" className="logo-font text-7xl">
                Co jeść?
            </Link>
            <div className="absolute flex items-center gap-x-12 ml-auto right-16">
                <Link
                    to="/"
                    className="nav-font text-2xl hover:text-amber-400 transition-all duration-300"
                >
                    Posty
                </Link>
                <Link
                    to="/o-mnie"
                    className="nav-font text-2xl hover:text-lime-400 transition-all duration-300"
                >
                    O mnie
                </Link>
            </div>
        </div>
    );
};
