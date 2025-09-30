import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--darkgrey)",
        color: "var(--white)",
        py: 6,
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Branding */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ color: "var(--orange)", fontWeight: "bold" }}>
            CoinForge
          </Typography>
          <Typography sx={{ color: "var(--grey)" }}>
            Your go-to platform for crypto news, prices, and alerts.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "var(--white)" }}><FaTwitter /></IconButton>
            <IconButton sx={{ color: "var(--white)" }}><FaGithub /></IconButton>
            <IconButton sx={{ color: "var(--white)" }}><FaLinkedin /></IconButton>
            <IconButton sx={{ color: "var(--white)" }}><FaDiscord /></IconButton>
          </Box>
        </Box>

        {/* Quick Links */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>Quick Links</Typography>
          <Typography component="a" href="/" sx={{ color: "var(--grey)", textDecoration: "none", "&:hover": { color: "var(--orange)" } }}>Home</Typography>
          <Typography component="a" href="/dashboard" sx={{ color: "var(--grey)", textDecoration: "none", "&:hover": { color: "var(--orange)" } }}>Dashboard</Typography>
          <Typography component="a" href="/compare" sx={{ color: "var(--grey)", textDecoration: "none", "&:hover": { color: "var(--orange)" } }}>Compare</Typography>
          <Typography component="a" href="/news" sx={{ color: "var(--grey)", textDecoration: "none", "&:hover": { color: "var(--orange)" } }}>News</Typography>
        </Box>

        {/* Subscribe */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>Subscribe</Typography>
          <Typography sx={{ color: "var(--grey)", mb: 1 }}>Get the latest crypto updates in your inbox</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{ backgroundColor: "var(--white)", borderRadius: 1, flex: 1 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--orange)",
                "&:hover": { backgroundColor: "var(--white)", color: "var(--orange)" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box sx={{ mt: 6, borderTop: "1px solid var(--grey)", pt: 2, textAlign: "center", color: "var(--grey)" }}>
        &copy; {new Date().getFullYear()} CoinForge. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
