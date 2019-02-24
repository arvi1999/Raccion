import React, { Component } from "react";
import web3 from "../ethereum/web3";
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
import token from "../ethereum/Token";

import Layout from "../components/Layout";

class Token extends Component {
  static async getInitialProps(props) {
    const account = await new web3.eth.getAccounts();
    const tokenSupply = await token.methods.totalSupply().call();
    console.log("List: ", tokenSupply);
    return {
      account
    };
  }

  render() {
    const yourAccount = this.props.account[0];
    return (
      <Layout>
        <br />
        <h1
          as="h1"
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px"
          }}
        >
          <Icon name="chain" size="huge" />
          <br />
          <br />
          Raccion Token ICO sale
        </h1>
        <hr />
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
              min="1"
              type="number"
              pattern="[0-9]"
              size="massive"
            />
          </Form.Field>
          <Form.Field>
            <Progress percent={10000 / 3000} indicating>
              3000/1000000 Tokens sold
            </Progress>
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
          Your Account :{yourAccount}
        </h3>
      </Layout>
    );
  }
}

export default Token;
