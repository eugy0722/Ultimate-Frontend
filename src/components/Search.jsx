// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import { SearchOutlined } from "@ant-design/icons";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = ({ text }) => (
  <Box sx={{ width: "475px", ml: { xs: 0, md: 1 }, mt: { xs: 4 } }}>
    <FormControl
      sx={{
        width: { xs: "100%", md: 224 },
        background: "white",
        borderRadius: "15px",
      }}
    >
      <OutlinedInput
        size="small"
        id="header-search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: -0.5 }}>
            <SearchOutlined />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          "aria-label": "weight",
        }}
        placeholder={text}
      />
    </FormControl>
  </Box>
);

export default Search;
