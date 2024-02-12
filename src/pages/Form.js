import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";

const titles = [
  "Purchase Something",
  "Request Software",
  "Request Service or Projects",
  "Book Travel",
  "Submit Expense Report",
];

export default function FormCard() {
  const [selected, setSelected] = useState(Array(titles.length).fill(false));

  const handleClick = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        justifyContent: "center",
        alignItems: "start",
        p: 2,
      }}
    >
      <Card
        sx={{
          height: "40rem",
          width: { xs: "100%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <CardContent sx={{ width: "100%", p: 2 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", margin: "2rem 0 4rem" }}
          >
            Hello! What do you need today?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {titles.map((title, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "16px",
                  padding: 1,
                  width: "20rem",
                }}
                onClick={() => handleClick(index)}
              >
                <IconButton>
                  {selected[index] ? (
                    <CheckCircleIcon sx={{ color: "green" }} />
                  ) : (
                    <CheckCircleOutlineIcon sx={{ color: "lightgrey" }} />
                  )}
                </IconButton>
                <Typography variant="body1">{title}</Typography>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          height: "40rem",
          width: { xs: "100%", md: "40%" },
          backgroundImage: "url(background2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardContent
          sx={{ position: "absolute", top: "2rem", width: "100%", p: 2 }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            My Requests
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No recent activity to show
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
