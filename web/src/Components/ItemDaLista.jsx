import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ItemDaLista = ({ texto, icone, link }) => {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      {/* passando as props para usa-las no menu de navegação */}

      <ListItemButton
        onClick={() => {
          navigate(link);
        }}
      >
        <ListItemIcon>{icone}</ListItemIcon>
        <ListItemText primary={texto} />
      </ListItemButton>
    </ListItem>
  );
};

export default ItemDaLista;
