import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List } from "@mui/material";
import ItemDaLista from "./ItemDaLista";
import BadgeIcon from "@mui/icons-material/Badge";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Navegacao = () => {
  const [drawer, setDrawer] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              {/* definindo que ao pressionar o button, ira abrir o drawer,(setDrawer = true) */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 4 }}
                onClick={() => {
                  setDrawer(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Restaurantes
              </Typography>
            </Toolbar>

            {/* abertura do menu lateral e as opções */}
            <Drawer
              open={drawer}
              onClose={(e) => {
                setDrawer(false);
              }}
            >
              <Box sx={{ width: 250 }}>
                <List>
                  <ItemDaLista texto="Home" icone={<MenuIcon />} link="/" />
                  <ItemDaLista
                    texto="Restaurantes"
                    icone={<RestaurantIcon />}
                    link="/restaurantes"
                  />
                  <ItemDaLista
                    texto="Sobre"
                    icone={<BadgeIcon />}
                    link="/sobre"
                  />
                </List>
              </Box>
            </Drawer>
          </AppBar>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Navegacao;
