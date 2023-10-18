import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const PieData = () => {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  const PieCenterLabel = ({ children }) => {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  };
  return (
    <Box
      sx={{
        background: "white",
        m: "10px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" color="bold" pl="16px">
        Customers
      </Typography>
      <Typography pl="16px">Customer that Buy Product</Typography>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>65% Customer</PieCenterLabel>
      </PieChart>
    </Box>
  );
};

export default PieData;
