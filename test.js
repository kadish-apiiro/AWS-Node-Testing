import AWS from 'aws-sdk';

function foo(x) {
    console.log("In foo");
    console.log("x =", x);
}

const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider();
const STS_CLIENT = new AWS.STS();
AWS.config.update({region: 'us-west-1'});

x = parseInt();
foo(x);