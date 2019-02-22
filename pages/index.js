import React, { Component } from "react";
import {
  Image,
  Button,
  Form,
  Input,
  Message,
  Checkbox,
  Icon,
  Progress,
  Header
} from "semantic-ui-react";

import Layout from "../components/Layout";

class Token extends Component {
  render() {
    return (
      <Layout>
        <br />
        <Header
          as="h1"
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px",
            marginLeft: "418px"
          }}
          icon
        >
          <Icon name="chain" />
          <br />
          Raccion Token ICO sale
        </Header>
        <hr />
        <Header
          as="h3"
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px",
            marginLeft: "30px"
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginTop: "34px",
              marginBottom: "20px",
              marginLeft: "30px"
            }}
          >
            Introducing "Raccion Token" (RAC) || Token price is 0.001 Ether. ||
            You currently have 0 RAC.
          </h3>
        </Header>
        <br />

        <Form>
          <Form.Field>
            <Input
              action={{
                color: "blue",
                labelPosition: "right",
                icon: "cart",
                content: "Buy Token"
              }}
              actionPosition="right"
              min="1"
              type="number"
              pattern="[0-9]"
              size="massive"
            />
          </Form.Field>
          <Form.Field>
            <Progress percent={10000 / 3000}>3000/1000000 Tokens sold</Progress>
          </Form.Field>
          <br />
          <br />
          <Form.Field>
            <Message info>
              <Message.Header>
                <h2>
                  <Icon name="info" /> Notice
                </h2>
              </Message.Header>
              <h3>
                This token sale uses the Rinkeby Test Network with fake ether.
                Use a browser extension like Metamask to connect to the test
                network and participate in the ICO. Please be patient if the
                test network runs slowly.
              </h3>
            </Message>
          </Form.Field>
        </Form>
        <br />
        <br />
        <hr />
        <h3
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px",
            marginLeft: "30px"
          }}
        >
          Your Account :{" "}
        </h3>
      </Layout>
    );
  }
}

export default Token;
