"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skills from "../custom/skill-section";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            label="Multinational company's"
            {...a11yProps(0)}
            sx={{
              color: "#14213D",
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
          <Tab
            label="National company's"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": { color: "#14213D" },
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
          <Tab
            label="StartUps"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": { color: "#14213D" },
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex  items-center justify-center flex-wrap gap-6">
          <Skills />
          <Skills />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex items-center justify-center">
          <Skills />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
