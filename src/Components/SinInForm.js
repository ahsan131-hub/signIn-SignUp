import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Headings } from "../Support/Headings/Headings";
import { lightBorder } from "../Theme/borders";
import { SimpleTextField } from "../Support/TextFields/TextFields";
import { SimpleLinks } from "../Support/Link/Links";
import { SimpleButton } from "../Support/Buttons/Buttons";
import { useHistory } from "react-router";
import axios from "axios";
function SinInForm(props) {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const history = useHistory();
  const handelSinInEvent = (event) => {
    // alert("fucl");
    fetch("https://signin-131.herokuapp.com/loginUser", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password,
        // Other body stuff
      }),
      headers: {
        "Content-Type": "application/json",
        // Other possible headers
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("login success");

          history.push("/main");
        } else {
          alert("login failed try again ");
        }
        console.log(res);
      })

      .catch((er) => {
        console.log(er);
      });

    // axios
    //   .post("http:localhost:8000/loginUser", {
    //     username: email,
    //     password,
    //   })
  };
  return (
    <div>
      {/* Title */}
      <div style={{ padding: "1rem" }}>
        <Headings text={"Sin in"} fontSize={30} fontWeight={"bold"} />
      </div>
      <Divider />
      <Grid container>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={email}
            setValue={setEmail}
            label="User Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={password}
            setValue={setpassword}
            label="Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleButton
            name="Sin in"
            handelClick={(e) => {
              // setDoHaveAccount(!doHaveAccount)
              handelSinInEvent(e);
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleLinks
            name={"Don't have account ?"}
            handelClick={() => {
              props.setDoHaveAccount(!props.doHaveAccount);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SinInForm;
