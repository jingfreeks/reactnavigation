/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { StatusBar } from "react-native";
 import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  ListItem,
  InputGroup,
  Tab,
  Tabs,
  List,
  Segment,
} from "native-base";

 import {
  Platform,
  StyleSheet,
  View,
  Image,
} from 'react-native';
//import SegmentTab from 'react-native-segment-tab'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { StackNavigator } from 'react-navigation';
import Moment from 'moment';


export default class DtremployeeScreen extends Component<{}> {
  state={
      selected: 0
    }
  render() {
    var dt=new Date();
    txttime_=Moment(dt).format('hh:mm A');
    txtdate_=Moment(dt).format('LL');
    return (
      <Container>
        <Header>
           <Left>
              <Button transparent
               onPress={() => this.props.navigation.navigate("DrawerOpen")}>
               <Icon name="menu" />

              </Button>
           </Left>
           <Body>
             <Title>My Daily Time Record</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  head: { height: 40, backgroundColor: '#f1f8ff'},
  text: { marginLeft: 5,fontSize:16,textAlign: 'center',fontWeight:'bold' },
  rowText:{ marginLeft: 5,fontSize:18,textAlign: 'center'},
  row: { height: 30 },
});
