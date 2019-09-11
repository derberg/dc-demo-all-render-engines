import React from "react";
import ReactDOM from "react-dom";
import { DC, Content } from "@kyma-project/documentation-component";
import {
  markdownRenderEngine,
  plugins as markdownPlugins
} from "@kyma-project/dc-markdown-render-engine";
import { asyncApiRenderEngine } from "@kyma-project/dc-async-api-render-engine";
import { odataRenderEngine } from "@kyma-project/dc-odata-render-engine";
import { openApiRenderEngine } from "@kyma-project/dc-open-api-render-engine";
import { GroupRenderer } from "./render/renderer.group";
import { sources } from "./mocks/sources";

import "@kyma-project/dc-odata-render-engine/lib/styles.css";
import "@kyma-project/dc-markdown-render-engine/lib/styles.css";
import "@kyma-project/dc-open-api-render-engine/lib/styles.css";

import "./styles.css";
import "fiori-fundamentals/dist/fiori-fundamentals.css";
import "fiori-fundamentals/dist/fonts.min.css";

const SOURCES = sources;
const RENDER_ENGINES = [
  markdownRenderEngine,
  asyncApiRenderEngine,
  odataRenderEngine,
  openApiRenderEngine
];
const PLUGINS = [
  markdownPlugins.frontmatterMutationPlugin,
  markdownPlugins.headersExtractorPlugin
];
const RENDERERS = {
  group: GroupRenderer
};
const App = () => (
  <DC.Provider
    sources={SOURCES}
    renderEngines={RENDER_ENGINES}
    plugins={PLUGINS}
  >
    <Content renderers={RENDERERS} />
  </DC.Provider>
);
ReactDOM.render(<App />, document.getElementById("root"));
