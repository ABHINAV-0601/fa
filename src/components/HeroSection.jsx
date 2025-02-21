import React from "react";
import styles from "./HeroSection.module.css";
import hero from '../assets/hero.png';
import heroMobile from '../assets/heroMobile.png';

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroBackground}>
                <img
                    src={hero}
                    alt="Children playing"
                    className={`${styles.heroImage} ${styles.desktop}`}
                />
                <img
                    src={heroMobile}
                    alt="Children playing"
                    className={`${styles.heroImage} ${styles.mobile}`}
                />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h2>
                        Your Child's Perfect Schedule <br className={styles.desktopOnly} />
                        in Just a Few Clicks
                    </h2>
                    <p>Less Planning, More Living.</p>
                    <div className={styles.heroButtonContainer}>
                        <button className={styles.heroButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-sparkles"
                            >
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            <span>Join the waiting list</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
