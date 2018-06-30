import * as React from "react";
import { RegisterView } from "./view/RegisterView";

// typical react web
// container -> view

// because we want to create web and mobile we want
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}