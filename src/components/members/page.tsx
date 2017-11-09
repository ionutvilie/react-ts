import * as React from 'react';
import { Card, CardText, CardTitle } from 'react-md';
import {
  Button,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  Avatar,
} from 'react-md';
import {
  MemberEntity,
  memberAPI
} from '../../data/members';
interface Props { }

interface State {
  isToggleOn: boolean;
  members: MemberEntity[];
}

export class MembersPage extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = {
      isToggleOn: false,
      members: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  public componentDidMount() {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

  MemberHeader = () => {
    return (
      <TableRow>
        <TableColumn >Avatar</TableColumn>
        <TableColumn >Name</TableColumn>
        <TableColumn numeric={true} >Id</TableColumn>
      </TableRow>
    );
  }

  MemberRow = (member: MemberEntity) => {
    // console.log(member)
    return (
      <TableRow key={member.id}>
        <TableColumn ><Avatar src={member.avatar_url} /></TableColumn>
        <TableColumn >{member.name}</TableColumn>
        <TableColumn numeric={true} >{member.id}</TableColumn>
      </TableRow>
    );
  }

  public render() {
    return (
      <Card className="md-cell md-cell--12 md-text-container">
        <CardTitle title="Members Page" />
        <CardText>
        <Button
          raised={true}
          secondary={true}
          iconBefore={false}
          iconClassName="fa fa-table"
          onClick={this.handleClick}
        >
          {this.state.isToggleOn ? 'HIDE TABLE' : 'SHOW TABLE'}
        </Button>
        <hr />
        {this.state.isToggleOn ? (
          <DataTable plain={true} >
            <TableHeader>
              {this.MemberHeader()}
            </TableHeader>
            <TableBody>
              {this.state.members.map(this.MemberRow)}
            </TableBody>
          </DataTable>) : null}
        </CardText>
      </Card>
    );
  }
}