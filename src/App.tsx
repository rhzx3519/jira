import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
import { TsReactTest } from "./try-use-array";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { ConfigProvider } from "antd";

function App() {
  const { user } = useAuth();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "00b96b", fontSize: 20 } }}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ConfigProvider>
  );
}

export default App;
