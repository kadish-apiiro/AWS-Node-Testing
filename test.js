import AWS from 'aws-sdk';

const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider();
const STS_CLIENT = new AWS.STS();
AWS.config.update({region: 'us-west-1', credentials: {YOUR_CREDENTIALS}});