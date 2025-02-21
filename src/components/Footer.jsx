import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo1.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="JustLiv Logo" className={styles.logo} />
                </div>

                <p className={styles.socialLink}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.icon}
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span>
                        <a
                            href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect with us on Instagram ♡
                        </a>
                    </span>
                </p>

                <div className={styles.linksContainer}>
                    <div className={styles.links}>
                        <p>
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                Privacy policy
                            </a>
                        </p>
                        <p>
                            <a href="/accessibility-statement" target="_blank" rel="noopener noreferrer">
                                Accessibility Statement
                            </a>
                        </p>
                    </div>

                    <p className={styles.linkedin}>
                        <a
                            href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={styles.icon}
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </p>

                    <p className={styles.copyright}>© 2024 by JustLiv</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
