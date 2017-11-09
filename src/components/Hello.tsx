import * as React from 'react';
import {
    Card, CardText, CardTitle, Media, MediaOverlay } from 'react-md';

declare function require(name: string): {};
const logo = require('../icons/logo.svg');
export class Hello extends React.Component<{}> {

    render() {
        return (
            <Card className="md-cell md-cell--12 md-text-container">

                <Media>
                    <img src={String(logo)} alt="Nature from lorempixel" className="App-logo"/>
                    <MediaOverlay>
                        <CardTitle title="Hello React" subtitle="with Typescript !" />
                    </MediaOverlay>
                </Media>
                <CardText>
                    <p>This project's goal is ... </p>
                    <p className="App-intro">
                        To get started, go into <code>/src</code> folder, edit and save to reload.
                    </p>
             </CardText>
            </Card>
        );
    }
}