import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/errorBoundary";

import App from "./app/App";
import ThemeProvider from "./app/providers/theme/ThemeProvider";

import "./shared/config/i18nConfig/i18n";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
