"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// react icons

// Icons
import { MdHome } from "react-icons/md";
import { FaStickyNote } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { IoMdMailUnread } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

interface NavItem {
  href: string;
  label: string;
  icon: any;
}

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: <MdHome /> },
    { href: "/", label: "blog", icon: <FaStickyNote /> },
    { href: "/", label: "College", icon: <IoIosSchool /> },
    { href: "/", label: "About", icon: <HiOfficeBuilding /> },
  ];
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((items) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <RiInboxArchiveLine /> : <IoMdMailUnread />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <IoMenu color={"black"} size={30} />{" "}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}