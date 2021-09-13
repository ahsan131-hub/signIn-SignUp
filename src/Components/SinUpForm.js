import { Card, CardContent, colors, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Headings } from "../Support/Headings/Headings";
import { lightBorder } from "../Theme/borders";
import { SimpleTextField } from "../Support/TextFields/TextFields";
import { SimpleLinks } from "../Support/Link/Links";
import { SimpleButton } from "../Support/Buttons/Buttons";
import { useHistory } from "react-router";

function SinUpForm(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setpassword] = useState();
  const history = useHistory();
  const handelCreaAccount = (event) => {
    // alert("fucl");
    fetch("https://signin-131.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: email,
        email: email,
        password: password,
        phone_number: mobile,
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
  };
  return (
    <div>
      {/* Title */}
      <div style={{ padding: "1rem" }}>
        <Headings text={"Sin up"} fontSize={30} fontWeight={"bold"} />
      </div>
      <Divider />
      <Grid container style={{ padding: "1rem" }}>
        <Grid item xs={6} style={{ padding: "1rem" }}>
          <SimpleTextField
            value={firstName}
            setValue={setFirstName}
            label="First Name"
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "1rem" }}>
          <SimpleTextField
            value={lastName}
            setValue={setLastName}
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={email}
            setValue={setEmail}
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={mobile}
            setValue={setMobile}
            label="Mobile"
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
            name="Creat Account"
            handelClick={(e) => {
              handelCreaAccount(e);
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleLinks
            name={"Have account.. Login"}
            handelClick={() => {
              props.setDoHaveAccount(!props.doHaveAccount);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SinUpForm;
