import React from "react";
import App from "./App";

import { createRoot } from 'react-dom/client';

it("renders without crashing", () => {

  const container = document.getElementById('root');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App tab="home" />);

  root.unmount()
});
