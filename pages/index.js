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
  Header,
  Modal
} from "semantic-ui-react";
import token from "../ethereum/Token";
import Layout from "../components/Layout";

class Token extends Component {
  // static async getInitialProps(props) {
  //     const tokenSupply = await token.methods.totalSupply().call();
  //     return (tokenSupply);
  // }

  state = {
    account: "",
    tokenNumber: "",
    open: false
  };

  onSubmit = async event => {
    event.preventDefault();
    const account = await web3.eth.getAccounts();
    const tokenSupply = await token.methods.totalSupply().call();
    const tokenBalance = await token.methods.balanceOf(account[0]).call();
    console.log("List: ", tokenSupply);
    console.log("Account balance is: ", tokenBalance);
    console.log("Account is: ", account);
  };

  show = dimmer => async () => {
    const account = await web3.eth.getAccounts();
    this.setState({ account: account[0] });
    console.log("account", this.state.account);
    this.setState({ dimmer, open: true });
  };

  // show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
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

        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Input
              action={{
                color: "blue",
                labelPosition: "right",
                icon: "cart",
                content: "Buy Token",
                type: "submit"
              }}
              min="1"
              type="number"
              pattern="[0-9]"
              size="massive"
              onChange={event =>
                this.setState({ tokenNumber: event.target.value })
              }
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
        <Form.Field>
          <Button onClick={this.show("blurring")} color="brown">
            My Account
          </Button>
        </Form.Field>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Account address</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h1 style={{textAlign:"center"}}>{this.state.account}</h1>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="blue"
              content="Okay"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </Layout>
    );
  }
}

export default Token;
