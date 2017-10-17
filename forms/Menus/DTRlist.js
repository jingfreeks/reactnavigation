/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { StatusBar } from "react-native";
 import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
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
  List,
} from "native-base";

 import {
  Platform,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Moment from 'moment';
export default class DTRlist extends Component<{}> {
  render() {
    const tableHead = ['Name', 'Date Login', 'Time Login'];
        const tableData = [
          ['Lyndell T. Dobluis', '10/17/2017', '07:50 am'],
          ['Jovan Olixua', '10/17/2017', '07:45 am'],
        ];
    return (
      <Container>

          <Header style={{backgroundColor: '#27ae60'}}>
              <Left>
                  <Button
                    transparent
                      onPress={()=> this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" />
                  </Button>

              </Left>
              <Body style={{marginLeft:150}}>
                    <Title>Daily Time Record List</Title>
              </Body>
          </Header>

          <View>
                  <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.rowText}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                  </Table>
          </View>

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
  text: { marginLeft: 5,fontSize:16,textAlign: 'center' },
  rowText:{ marginLeft: 5,fontSize:18,textAlign: 'center'},
  row: { height: 30 }
});
