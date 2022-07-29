import { Box, Typography } from "@mui/material";

function InstructionStep({
  title,
  children,
  ...other
}: {
  title: string;
  children: JSX.Element;
  [x: string]: any;
}) {
  return (
    <Box mb={4} {...other}>
      <Typography variant="h4" mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default InstructionStep;
