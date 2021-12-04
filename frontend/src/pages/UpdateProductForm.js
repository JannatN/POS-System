import React, { Component } from "react";
import { Form, Segment, Header } from "semantic-ui-react";
const categoryOptions = [
  { key: "t", text: "Tshirt", value: "tshirt" },
  { key: "p", text: "Pants", value: "pants" },
  { key: "j", text: "Jackets", value: "jackets" },
];
class UpdateProductForm extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Header as="h2">Add Product</Header>
        <Segment raised padded="very">
          <Form>
            <Form.Group unstackable widths="equal">
              <Form.Input
                label="Product Name"
                placeholder="Jacket"
                icon="clipboard"
              />

              <Form.Input label="Size" placeholder="Large" icon="angle down" />
            </Form.Group>

            <Form.Group unstackable widths={2}>
              <Form.Input label="Price" placeholder="100" icon="dollar" />
              <Form.Input label="Color" placeholder="Black" icon="tint" />
            </Form.Group>

            <Form.Group unstackable widths={2}>
            <Form.Select
            fluid
            label='Category'
            options={categoryOptions}
            placeholder='Tshirt'
          />
              <Form.Input label="Quantity" placeholder="40 pieces" icon='boxes'/>
            </Form.Group>
            
            <Form.Group widths={2}>
            <Form.TextArea label='Description' placeholder="2021casual fashion new brand Splicing printing hooded sweatshirts men\'s sportswear brand men\'s/women\'s hoodies S-3XL..." />
            </Form.Group>   
            <Form.Group inline>
              <Form.Button positive>Save</Form.Button>
              <Form.Button negative>Cancel</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default UpdateProductForm;
