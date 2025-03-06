import React, { useState } from "react";
import styles from "./orgs.module.css";
import orgsData from "../../data/orgs.json";
import { getImageUrl } from "../../utils";

const Orgs = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrgs = orgsData.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
    
      <div className={styles.sidebar}>
        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search organizations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.orgGrid}>
          {filteredOrgs.map((org) => (
            <div
              key={org.id}
              className={styles.orgItem}
              onClick={() => setSelectedOrg(org)}
            >
              <img src={getImageUrl(org.logo)} alt={org.acronym} className={styles.logo} />
              <div className={styles.orgDetails}>{org.acronym}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.details}>
        {selectedOrg ? (
          <>
            <div className={styles.detailsHeader}>
              <img
                src={getImageUrl(selectedOrg.logo)} 
                alt={selectedOrg.name}
                className={styles.detailsLogo}
              />
              <div className={styles.orgName}>{selectedOrg.name}</div>
            </div>
            <div className={styles.description}>{selectedOrg.description}</div>
            <div className={styles.tags}>
              {selectedOrg.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <button
              className={styles.registerButton}
              onClick={() => window.open(selectedOrg.registrationLink, "_blank")}
            >
              Register Now
            </button>
          </>
        ) : (
          <p>Select an organization to view its details.</p>
        )}
      </div>
    </div>
  );
};

export default Orgs;
