import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Card,
  CardActions,
  CardContent,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";

function HelpCard() {
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    // eslint-disable-next-line no-restricted-globals
    navigator.clipboard.writeText(location.href);
    setOpen(true);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle2" mb={2}>
          Need Help?
        </Typography>
        <Typography variant="body2">
          Duis lacus erat, tincidunt a quam eu, feugiat feugiat felis. Duis
          hendrerit a eros at pulvinar. Quisque a congue enim. Proin at egestas
          eros. Duis venenatis commodo tempus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href="https://www.google.com"
          target="_blank+"
          variant="body2Link"
          mb={1}
        >
          <OpenInNewIcon
            sx={{ fontSize: 16, paddingRight: "8px" }}
            color="action"
          />
          Learn where to find organization ID
        </Link>
        <Tooltip
          onClose={() => setOpen(false)}
          open={open}
          title="Copied to clipboard"
        >
          <Link component="button" variant="body2Link" onClick={handleCopy}>
            <ContentCopyIcon
              sx={{ fontSize: 16, paddingRight: "8px" }}
              color="action"
            />
            Copy a link to this page
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default HelpCard;
