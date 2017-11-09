import * as React from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import { FontIcon, NavigationDrawer, ListItem } from 'react-md';
import { Hello, About, MembersPage, Login } from './components';

import 'font-awesome/css/font-awesome.css';
declare function require(name: string): {};
const logo = require('./icons/metro.png');

interface Props { }
interface State {
    visible: boolean;
    renderNode: null;
}

const Pages = [
    {
        key: 'hello',
        label: 'Hello',
        leftIcon: 'fa fa-home',
        to: '/',
        exact: true,
        divider: false
    },
    {
        key: 'about',
        label: 'About',
        leftIcon: 'fa fa-superpowers',
        to: '/about',
        divider: false,
        exact: false,

    }, {
        key: 'members',
        label: 'Members',
        leftIcon: 'fa fa-users',
        to: '/members',
        divider: false,
        exact: false,
    },

    {
        key: 'login',
        label: 'Login',
        leftIcon: 'fa fa-sign-in',
        to: '/login',
        divider: false,
        exact: false,
    },
];

export class AppRouter extends React.Component<Props, State>  {
    constructor() {
        super();
        this.state = {
            visible: false,
            renderNode: null,
        };
    }

    NavLink = (label?: string, to?: string, exact?: boolean, icon?: string) => (
        <Route path={to} exact={exact} key={to}>
            {({ match }) => {
                let leftIcon;
                if (icon) {
                    leftIcon = <FontIcon iconClassName={icon} forceFontSize={true} forceSize={20} />;
                }

                return (
                    <ListItem
                        component={RouterLink}
                        active={!!match}
                        to={to}
                        primaryText={label}
                        leftIcon={leftIcon}
                    />
                );
            }}
        </Route>
    )

    Title = () => {
        return (
            <div className="App">
                <div className="App-banner">
                    <img className="md-title md-title--toolbar" alt="logo" src={String(logo)} />
                </div>
                <div className="App-title">
                    <h2 className="md-title md-title--toolbar">Typescript-React Demo App</h2>
                </div>
            </div>
        );
    }

    render() {
        // const { visible, renderNode } = this.state;
        return (
            <Route
                render={({ location }) => (
                    <NavigationDrawer
                        navItems={Pages.map(props =>
                            this.NavLink(props.label, props.to, props.exact, props.leftIcon))}
                        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                        // toolbarTitle="Typescript-React Demo App"
                        toolbarTitle={this.Title()}
                        drawerTitle="Menu"
                        contentId="main-content"
                        temporaryIcon={<FontIcon iconClassName="fa fa-bars" forceFontSize={true} forceSize={15} />}
                        persistentIcon={<FontIcon
                            iconClassName="fa fa-arrow-left"
                            forceFontSize={true}
                            forceSize={15}
                        />
                        }
                        contentClassName="md-grid"
                    >
                        <h2 className="md-cell md-cell--12" />
                        <section className="md-text-container md-cell md-cell--12">
                            <Switch key={location.key}>
                                <Route exact={true} path="/" location={location} component={Hello} />
                                <Route path="/about" location={location} component={About} />
                                <Route path="/members" location={location} component={MembersPage} />
                                <Route path="/login" location={location} component={Login} />
                            </Switch>
                        </section>
                    </NavigationDrawer>
                )}
            />
        );
    }
}

export default AppRouter;
