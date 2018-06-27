import * as React from "react";
import { RegisterView } from "./view/RegisterView";

export const RegisterConnector = () => <RegisterView />

// typical react web
// container -> view

// because we want to create web and mobile we want
// container -> connector -> view
// controller -> connector -> view
