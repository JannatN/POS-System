import React, { Component } from "react";
import { Form, Segment, Header, Message } from "semantic-ui-react";
import api from "../api";

class AddProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: "",
      product_category: "",
      product_quantity: undefined,
      product_price: undefined,
      product_size: "",
      product_color: "",
      product_description: "",
      product_barcode: undefined,
      submittedSuccess: false,
      submittedError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateProduct = this.handleCreateProduct.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleCreateProduct = async (event) => {
    const {
      product_name,
      product_size,
      product_category,
      product_color,
      product_barcode,
      product_description,
      product_price,
      product_quantity,
    } = this.state;

    const payload = {
      product_name,
      product_size,
      product_category,
      product_color,
      product_barcode,
      product_description:product_description?product_description:" ",
      product_price,
      product_quantity,
    };
    await api
      .addProduct(payload)
      .then((res) => {
        this.setState({
          product_name: "",
          product_category: "",
          product_quantity: undefined,
          product_price: undefined,
          product_size: "",
          product_color: "",
          product_description: "",
          product_barcode: undefined,
          submittedSuccess: true,
          submittedError: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          submittedSuccess: false,
          submittedError: true,
        });
      });
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Header as="h2">Add Product</Header>
        <Segment raised padded="very">
          <Form
            size="large"
            success={state.submittedSuccess}
            error={state.submittedError}
          >
            <Form.Group unstackable widths="equal">
              <Form.Input
              required
                name="product_name"
                label="Product Name"
                placeholder="Jacket"
                icon="clipboard"
                value={state.product_name}
                onChange={this.handleInputChange}
              />

              <label className="field">
                Size
                <select
                required
                  name="product_size"
                  value={state.product_size}
                  onChange={this.handleInputChange}
                  className="ui menu transition selection dropdown" 
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                  <option value="one">One Size</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </Form.Group>

            <Form.Group unstackable widths={2}>
              <Form.Input
              required
                name="product_price"
                label="Price"
                placeholder="100"
                icon="dollar"
                value={state.product_price}
                onChange={this.handleInputChange}
              />
              <Form.Input
              required
                name="product_color"
                label="Color"
                placeholder="Black"
                icon="tint"
                value={state.product_color}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group unstackable widths={2}>
              <label className="field">
                Category
                <select
                required
                  name="product_category"
                  value={state.product_category}
                  onChange={this.handleInputChange}
                  className="ui fluid selection dropdown"
                >
                  <option value="tshirts">Tshirts</option>
                  <option value="pants">Pants</option>
                  <option value="jackets">Jackets</option>
                  <option value="coats">Coats</option>
                </select>
              </label>
              <Form.Input
              required
                name="product_quantity"
                label="Quantity"
                placeholder="40 pieces"
                icon="boxes"
                value={state.product_quantity}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
              required
                name="product_barcode"
                label="Barcode"
                placeholder="1111-222-333"
                icon="barcode"
                value={state.product_barcode}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.TextArea
                name="product_description"
                label="Description"
                placeholder="2021casual fashion new brand Splicing printing hooded sweatshirts men's sportswear brand men's/women's hoodies S-3XL..."
                value={state.product_description}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Message
              success
              header="Product Add"
              content="Product inserted successfully"
            />
            <Message
              error
              header="Error!"
              content="Make sure you filled all the required feilds"
            />
            <Form.Group inline>
              <Form.Button
                type="submit"
                positive
                onClick={this.handleCreateProduct}
              >
                Save
              </Form.Button>
              <Form.Button negative>Cancel</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default AddProductForm;
