import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
    UserPoolId: "eu-central-1_wLwmPJjGY",
    ClientId: "2h9nv3me13kpo7588jmuc1v6a3"
}

const user = new CognitoUserPool(poolData)
export default user;
