import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import ThemeProvider from "./app/providers/theme/ThemeProvider";

import "./shared/config/i18nConfig/i18n";
import ErrorBoundary from "app/providers/errorBoundary/ui/ErrorBoundary";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";

render(
  <ThemeProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>,
  document.getElementById("root")
);
