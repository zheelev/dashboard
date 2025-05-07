import { useState } from "react";
import {
  Sidebar as SBar,
  Menu,
  MenuItem,
  menuClasses,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeOutlined as HomeOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  ContactsOutlined as ContactsOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  PieChartOutlineOutlined as PieChartOutlineOutlinedIcon,
  TimelineOutlined as TimelineOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  MapOutlined as MapOutlinedIcon,
} from "@mui/icons-material";

const Item = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MenuItem
      //active={isActive}
      style={{
        color: colors.grey[100],
        backgroundColor: isActive ? colors.redAccent[600] : undefined,
      }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <SBar
        collapsed={isCollapsed}
        height="100%"
        transitionDuration={1000}
        backgroundColor="inherit"
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[300],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

         {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={"./user.jpg"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jane Doe
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[200]}>
                  Nails Studio
                </Typography>
              </Box>
            </Box>
          )} 

          <Box
            sx={{
              [`& .${menuClasses.button}:hover`]: {
                backgroundColor: `${colors.redAccent[700]} !important`,
              },
            }}
          >
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} />

            <Typography
              variant="h6"
              color={colors.redAccent[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
            />

            <Typography
              variant="h6"
              color={colors.redAccent[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
            />

            <SubMenu
              label="Charts"
              sx={{ m: "15px 0 5px 20px" }}
              icon={<BarChartOutlinedIcon />}
              rootStyles={{
                ["& > ." + menuClasses.button]: {
                  backgroundColor: "ffff",
                  color: "#9f0099",
                  "&:hover": {
                    backgroundColor: "#eecef9",
                  },
                },
                ["." + menuClasses.subMenuContent]: {
                  backgroundColor: `${colors.primary[400]}`,
                },
              }}
            >
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
              />
            </SubMenu>
          </Box>
        </Menu>
      </SBar>
    </Box>
  );
};

export default Sidebar;
