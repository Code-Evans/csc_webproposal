import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}>
            <a className={styles.title} href="/">
                <img
                    className={styles.headerlogo}
                    src={getImageUrl("nav/csclogo.png")}
                    alt="Central Student Council Logo"
                />
                Central Student Council
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/close.png")
                            : getImageUrl("nav/menu.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen ? styles.menuOpen : ""
                    }`}
                >
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            offset={-1000}
                            duration={500}
                            onClick={() => setMenuOpen(false)} // Close menu after click
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            offset={-250}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="events"
                            smooth={true}
                            offset={-375}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="members"
                            smooth={true}
                            offset={850}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Members
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="orgs"
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Orgs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contacts"
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
