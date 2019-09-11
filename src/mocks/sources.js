import { asyncapiSpecMock } from "./asyncApiMock";
import { openapiSpecMock } from "./openApiMock";
import { odataSpecMock } from "./odataMock";
import { markdownMock } from "./markdownMocks";

export const sources = [
  {
    sources: [
      {
        source: {
          type: "markdown",
          rawContent: markdownMock
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
