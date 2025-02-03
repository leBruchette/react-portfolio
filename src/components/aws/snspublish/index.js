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
                    region: "us-east-1",
                }),
                identityPoolId: "us-east-1:97395a86-1769-4ebd-9bd1-6703cf5ad327",
                accountId: "689385914997"
            })
        });
        const params = {
            TopicArn: "arn:aws:sns:us-east-1:689385914997:mailer-nodejs-email-recipients-topic",
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