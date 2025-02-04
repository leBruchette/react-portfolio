import React, {useState} from 'react';
import {PublishCommand, SNSClient} from '@aws-sdk/client-sns';
import {fromCognitoIdentityPool} from '@aws-sdk/credential-provider-cognito-identity';
import {CognitoIdentityClient} from '@aws-sdk/client-cognito-identity';

const SNSMessageSender = () => {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const VALID_EMAIL = "Please enter a valid email address.";

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailRegex.test(email)) {
            setResponse(VALID_EMAIL);
            return;
        }

        const client = new SNSClient({
            region: "us-east-1",
            credentials: fromCognitoIdentityPool({
                client: new CognitoIdentityClient({
                    region: process.env.REACT_APP_AWS_REGION,
                }),

                identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
                accountId: process.env.REACT_APP_AWS_ACCOUNT_ID
            })
        });
        const params = {
            TopicArn: process.env.REACT_APP_RESUME_REQUEST_TOPIC_ARN,
            Message: ".",
            MessageAttributes: {
                'email': {
                    DataType: 'String',
                    StringValue: email
                }
            }
        };


        try {
            await client.send(new PublishCommand(params));
            setResponse(`Resume has been sent!`);
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse('Error sending message.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="resumeRequest"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setResponse('');
                    }}
                />
                <div onClick={handleSubmit} className="ac_btn btn button_p">Request</div>
                {response && <div className="resumeResponse"
                                  style={{color: !emailRegex.test(email) ? 'red' : 'lightgreen'}}>{response}</div>}
            </form>

        </div>
    );
};

export default SNSMessageSender;