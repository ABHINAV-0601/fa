import React from "react";
import styles from "./JoinWaitlist.module.css";

const JoinWaitlist = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.desktopBg} ${styles.overlay}`}></div>
            <div className={`${styles.mobileBg} ${styles.overlay}`}></div>

            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Ready to Simplify Your Life?</h1>
                    <p className={styles.description}>
                        Be the first to know when we launch! Join our waiting list and get
                        exclusive updates and early access to our journey.
                    </p>
                </div>

                <div className={styles.buttonContainer}>
                    <dialog id="my_modal_1" className={styles.modal}>
                        <div className={styles.modalBox}>
                            <form method="dialog">
                                <button className={styles.closeButton}>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className={styles.closeIcon}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                    </svg>
                                </button>
                            </form>
                            <iframe
                                src="https://forms.zohopublic.com/nicolejus1/form/Waitlist/formperma/TiKrSRkMrfTymX7Xb4LE3I_7LTr8lbR_2llRUWKojzA"
                                width="100%"
                                height="500px"
                                title="Zoho Form"
                                aria-label="Zoho Form"
                                loading="lazy"
                                className={styles.iframe}
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <form method="dialog" className={styles.modalBackdrop}>
                            <button>Close</button>
                        </form>
                    </dialog>

                    <button className={styles.waitlistButton}>
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
                            className={styles.sparkleIcon}
                        >
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path>
                            <path d="M22 5h-4"></path>
                            <path d="M4 17v2"></path>
                            <path d="M5 18H3"></path>
                        </svg>
                        <span className={styles.buttonText}>Join the waiting list</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinWaitlist;
