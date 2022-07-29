import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import CodeSnippet from "../../generic/CodeSnippet";
import InstructionStep from "./InstructionStep";

function OrganizationIdSnippet() {
  const [orgId, setOrgId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && value.length > 0) {
      if (/^[0-9]+$/.test(value)) {
        setErrorMsg("");
        setOrgId(value);
      } else {
        setErrorMsg("Please enter numbers only.");
      }
    } else {
      setErrorMsg("Please enter your Organization ID");
    }
  };

  const hasError = errorMsg.length > 0;
  return (
    <>
      <InstructionStep title=" To create custom code snippets, fill in your organization ID:">
        <TextField
          id="org-id"
          fullWidth
          label="Your Organization ID"
          variant="outlined"
          type="text"
          inputProps={{
            maxLength: 15,
            inputMode: "numeric",
          }}
          error={hasError}
          helperText={errorMsg}
          onChange={handleTextChange}
        />
      </InstructionStep>

      <InstructionStep title="Run the following gcloud commands in sequence:">
        {orgId ? (
          <CodeSnippet>
            <>
              Donec at ante sed orci euismod venenatis iaculis at sapien.
              --organization{" "}
              <Typography component="span" color="red" variant="inherit">
                {orgId}
              </Typography>{" "}
              -- Ut id nisl a neque facilisis tempus. Donec et risus dui.
              Aliquam fringilla luctus velit quis dapibus.
            </>
          </CodeSnippet>
        ) : (
          <Typography color="gray" variant="body2">
            To view the command, enter the organization ID first
          </Typography>
        )}
      </InstructionStep>
    </>
  );
}

export default OrganizationIdSnippet;
