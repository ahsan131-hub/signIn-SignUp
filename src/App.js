import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Headings } from "./Support/Headings/Headings";
import { SimpleTextField } from "./Support/TextFields/TextFields";
import { lightBorder } from "./Theme/borders";
import { SimpleButton } from "./Support/Buttons/Buttons";
import { SimpleLinks } from "./Support/Link/Links";
import SinInForm from "./Components/SinInForm";
import SinUpForm from "./Components/SinUpForm";

function App(props) {
  const [doHaveAccount, setDoHaveAccount] = useState(false);

  return (
    
      <div>
        <Grid container>
          <Grid item lg={1} md={1} sm={0}></Grid>
          <Grid item lg={10} md={10} sm={12}>
            <Card
              elevation={0}
              style={{
                border: lightBorder,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2rem",
                width: "30rem",
                height: "35rem",
              }}
            >
              <CardContent>
                {!doHaveAccount && (
                  <div>
                    <SinUpForm
                      doHaveAccount={doHaveAccount}
                      setDoHaveAccount={setDoHaveAccount}
                    />
                  </div>
                )}
                {doHaveAccount && (
                  <div>
                    <SinInForm
                      doHaveAccount={doHaveAccount}
                      setDoHaveAccount={setDoHaveAccount}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={1} md={1} sm={0}></Grid>
        </Grid>
      </div>
    
  );
}

export default App;
