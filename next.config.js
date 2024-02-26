const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

module.exports = withPayload(
  {
    // your Next config here
  },
  {
    configPath: path.resolve(__dirname, "./payload/payload.config.ts"),
    // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),
    payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),
    adminRoute: "/admin",
  }
);
