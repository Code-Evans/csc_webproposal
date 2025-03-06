import React, { useState, useEffect } from 'react';
import styles from './EventCalendar.module.css';
import eventsData from "../../data/events.json";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

 
  useEffect(() => {
    const currentDate = new Date();
    const upcomingEvents = eventsData
      .filter((event) => new Date(event.date) >= currentDate)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(upcomingEvents);
    if (upcomingEvents.length > 0) {
      setSelectedEvent(upcomingEvents[0]);
    }
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.container} id = "events"> 
      {!isMobile && (
        <div className={styles.calendar}>
          <ul className={styles.eventList}>
            {events.map((event) => (
              <li
                key={event.id}
                className={`${styles.eventItem} ${
                  selectedEvent?.id === event.id ? styles.active : ''
                }`}
                onClick={() => handleEventClick(event)}
              >
                <div>
                  <strong>{event.title}</strong>
                  <p className={styles.eventDate}>
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.details}>
        {selectedEvent ? (
          <div className={styles.eventDetails}>
          <img
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className={styles.eventImage}
          />
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>{selectedEvent.title}</h3>
            <p className={styles.eventDescription}>{selectedEvent.description}</p>
            <p className={styles.eventDate}>
              <strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}
            </p>
            <p className={styles.eventOrganizer}>
              <strong>Organized by:</strong> {selectedEvent.organizer}
            </p>
            <a
              href={selectedEvent.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registerButton}
            >
              Register
            </a>
          </div>
        </div>
        
        ) : (
          <p>No upcoming events</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
