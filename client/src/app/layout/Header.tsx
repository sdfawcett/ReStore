import { AppBar, FormControlLabel, FormGroup, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header() {
  return (
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
         <Typography variant="h6">
            ReStore
         </Typography>
         <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="" />
        </FormGroup>
      </Toolbar>
    </AppBar>
  )
}
