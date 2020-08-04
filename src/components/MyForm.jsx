import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Input,
  Form,
  Row,
  Col,
} from "reactstrap";

const MyForm = (props) => {
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <Row>
          <Col xs="6" sm="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>#</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="number" />
              <Button outline color="success">
                Visualize
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MyForm;
