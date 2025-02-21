import React from "react";
import styles from "./HowItWorks.module.css";
import down from '../assets/downArrow.png';
import twisted from '../assets/twistedArrow.png';

const HowItWorks = () => {
    const steps = [
        {
            title: "Browse",
            description: "Discover activities from our partner booking providers.",
            icon: "search",
        },
        {
            title: "Build",
            description:
                "Share your child’s interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.",
            icon: "calendar",
            arrowImage: down,
            arrowClass: styles.downArrow,
        },
        {
            title: "Book",
            description: "Finalize your selections with one click and enjoy peace of mind.",
            icon: "heart",
            arrowImage: twisted,
            arrowClass: styles.twistedArrow,
        },
    ];

    return (
        <div className={styles.heroSection}>
            <h2 className={styles.heading}>How it works</h2>
            <div className={styles.container}>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.iconWrapper}>
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
                                    {step.icon === "search" && (
                                        <>
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </>
                                    )}
                                    {step.icon === "calendar" && (
                                        <>
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </>
                                    )}
                                    {step.icon === "heart" && (
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    )}
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.description}</p>
                            </div>
                            {step.arrowImage && (
                                <img src={step.arrowImage} alt="" className={step.arrowClass} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
