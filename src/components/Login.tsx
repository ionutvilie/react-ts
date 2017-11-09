import * as React from 'react';
import { Card, CardText, CardTitle, TextField, FontIcon, CardActions, Button } from 'react-md';

export const Login: React.StatelessComponent<{}> = () => {
    return ((
        // tslint:disable:max-line-length
        <Card className="md-cell md-cell--12 md-text-container">
            <CardTitle title="Login" />
            <CardText>
                <form>
                    <TextField
                        id="user"
                        type="text"
                        label="User"
                        leftIcon={<FontIcon iconClassName="fa fa-user" />}
                        required={true}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        leftIcon={<FontIcon iconClassName="fa fa-unlock" />}
                        passwordIcon={<FontIcon iconClassName="fa fa-eye-slash" />}
                        required={true}
                    />
                    <p/>
                    <CardActions>
                        <Button raised={true} secondary={true} iconClassName="fa fa-sign-in">Submit</Button>
                    </CardActions>
                </form>
            </CardText>
        </Card>
        // tslint:enable:max-line-length
    )
    );
};
