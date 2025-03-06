import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, TextField, Button, Chip } from "@mui/material";
import orgsData from "../../data/orgs.json";

const Orgs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState(null);

  // Filter organizations based on search query
  const filteredOrgs = orgsData.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container style={{ height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Grid
        item
        xs={12}
        md={4}
        style={{ overflowY: "auto", borderRight: "1px solid #ddd", padding: "1rem", backgroundColor: "#f9f9f9" }}
      >
        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search organizations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        {/* Grid of Organizations */}
        <Grid container spacing={2}>
          {filteredOrgs.map((org) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={org.id}
              onClick={() => setSelectedOrg(org)}
              style={{ cursor: "pointer" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={org.logo}
                  alt={org.name}
                  style={{ height: 100 }}
                />
                <CardContent>
                  <Typography variant="h6">{org.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid item xs={12} md={8} style={{ padding: "2rem", overflowY: "auto" }}>
        {selectedOrg ? (
          <>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <img
                src={selectedOrg.logo}
                alt={selectedOrg.name}
                style={{
                  width: 80,
                  height: 80,
                  marginRight: "1rem",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
              <Typography variant="h4">{selectedOrg.name}</Typography>
            </div>
            <Typography variant="body1" paragraph>
              {selectedOrg.description}
            </Typography>
            <div>
              {selectedOrg.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  color="primary"
                  style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                />
              ))}
            </div>
            <Button
              variant="contained"
              color="success"
              style={{ marginTop: "1rem" }}
              onClick={() => window.open(selectedOrg.registrationLink, "_blank")}
            >
              Register Now
            </Button>
          </>
        ) : (
          <Typography variant="h6" color="textSecondary">
            Select an organization to see the details.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Orgs;
