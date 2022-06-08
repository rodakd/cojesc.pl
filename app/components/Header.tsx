import * as React from "react";
import { Link } from "remix";

export const Header: React.FC = () => {
    return (
        <div className="p-5 flex items-center justify-center sticky top-0 z-50 bg-white">
            <Link to="/" className="logo-font text-7xl">
                Co jeść?
            </Link>
            <div className="absolute flex items-center gap-x-12 ml-auto right-16">
                <Link
                    to="/"
                    className="nav-font text-xl hover:text-amber-400 transition-all duration-300"
                >
                    Najnowsze
                </Link>
                <Link
                    to="/kategorie"
                    className="nav-font text-xl hover:text-blue-400 transition-all duration-300"
                >
                    Kategorie
                </Link>
                <Link
                    to="/o-mnie"
                    className="nav-font text-xl hover:text-lime-400 transition-all duration-300"
                >
                    O mnie
                </Link>
            </div>
        </div>
    );
};
