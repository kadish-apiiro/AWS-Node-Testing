import AWS from 'aws-sdk';

const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider();
const STS_CLIENT = new AWS.STS();
var x =  new AWS.SSM();
