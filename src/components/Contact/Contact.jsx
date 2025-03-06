import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
    
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c45af9a7-ba2a-4b37-8bbb-de707b9cb935");
    
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <div className={styles.contact} id = "contacts">
            <div className={styles.contactCol}>
                <div className={styles.contactCol}>
                    <h3>Send us a Message</h3>
                    <p>
                        Feel free to reach out through the contact form or find our contact
                        information below.
                    </p>
                    <ul className={styles.contactList}>
                        <li>
                            <img

                            
                                className={styles.contactIcon}
                                src={getImageUrl("contact/mailIcon.png")}
                                alt="Email icon"
                            />
                        
                            <a href="mailto:studentcouncil@my.jru.edu" className={styles.contactLink}>
                                studentcouncil@my.jru.edu
                            </a>
                        </li>
                        <li>
                            <img
                                className={styles.contactIcon}
                                src={getImageUrl("contact/fbIcon.png")}
                                alt="Facebook icon"
                            />
                        
                            <a 
                                href="https://www.facebook.com/jru.csc"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                JRU Central Student Council
                            </a>
                        </li>
                        <li>
                            <img
                                className={styles.contactIcon}
                                src={getImageUrl("contact/instaIcon.png")}
                                alt="Instagram icon"
                            />
                            <a 
                                href="https://www.instagram.com/jru_csc"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                @jru_csc
                            </a>
                        </li>
                        <li>
                            <img
                                className={styles.contactIcon}
                                src={getImageUrl("contact/tiktokIcon.png")}
                                alt="Tiktok icon"
                            />
                            
                            <a 
                                href="https://www.tiktok.com/@jrucsc"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                @jrucsc
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contactCol}>
                <form className={styles.contactForm} onSubmit={onSubmit}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        className={styles.input}
                    />
                    
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className={styles.input}
                    />

                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your message"
                        required
                        className={styles.textarea}
                    ></textarea>

                    <button type="submit" className={`${styles.button} ${styles.darkButton}`}>
                        Send Message
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
