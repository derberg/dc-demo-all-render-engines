import { asyncapiSpecMock } from "./asyncApiMock";
import { openapiSpecMock } from "./openApiMock";
import { odataSpecMock } from "./odataMock";
import { markdownMock1, markdownMock2 } from "./markdownMocks";

export const sources = [
  {
    sources: [
      {
        source: {
          type: "markdown",
          rawContent: markdownMock1
        }
      },
      {
        source: {
          type: "markdown",
          rawContent: markdownMock2
        }
      },
      {
        source: {
          type: "asyncapi",
          rawContent: asyncapiSpecMock
        }
      },
      {
        source: {
          type: "openapi",
          rawContent: openapiSpecMock
        }
      },
      {
        source: {
          type: "odata",
          rawContent: odataSpecMock
        }
      }
    ]
  }
];
