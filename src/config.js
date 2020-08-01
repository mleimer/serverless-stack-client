export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "smartin-tutorial"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2gbrc1xl99.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JDyyqJ4zU",
    APP_CLIENT_ID: "ebtvi7546kmd60qg2amsiqq4v",
    IDENTITY_POOL_ID: "us-east-1:2dc8adae-de46-4b4f-9f09-b4bcbb2c5657"
  }
};