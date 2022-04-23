import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function OfflineFeed() {
  return (
    <div style={{ marginTop: "9rem" }}>
      <Grid container>
        <Grid
          item
          md={4}
          sm={5}
          sx={{
            mt: "0.1%",
            mb: "3%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ede8ea",
              height: 300,
              width: 300,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                padding: "1rem",
              }}
            >
              <Typography variant="h6">Title:</Typography>
              <Typography variant="h6">Author:</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                exercitationem veritatis aspernatur ad. Voluptate omnis sequi in
                sunt, fuga magni veritatis recusandae inventore iusto
                exercitationem beatae, voluptatem eius obcaecati dignissimos.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
