import React from "react";
import styles from "./WhyJustLiv.module.css";
import laptop from '../assets/laptop.png';
import child from '../assets/child.png';
import mother1 from '../assets/mother1.png';

const WhyJustLiv = () => {
    const features = [
        {
            title: "Custom Calendar",
            description:
                "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
            image: laptop,
            alt: "Calendar",
        },
        {
            title: "Tailored to Your Interests",
            description:
                "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.",
            image: child,
            alt: "Interests",
        },
        {
            title: "Stress-Free Bulk Booking",
            description:
                "Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.",
            image: mother1,
            alt: "Booking",
        },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Why JustLiv?</h2>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
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
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path>
                            <path d="M22 5h-4"></path>
                            <path d="M4 17v2"></path>
                            <path d="M5 18H3"></path>
                        </svg>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardText}>{feature.description}</p>
                        <img src={feature.image} alt={feature.alt} className={styles.cardImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyJustLiv;
