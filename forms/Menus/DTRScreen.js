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
} from "native-base";

 import {
  Platform,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Moment from 'moment';
export default class DTRScreen extends Component<{}> {
  render() {
    var dt=new Date();
    txtdate_=Moment(dt).format('hh:mm a');
    return (
      <Container>
          {/*<Header style={{backgroundColor: '#ecf0f1',}}>
              <Left>
                  <Button
                    transparent
                      onPress={()=> this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" style={{color:'black'}}/>
                  </Button>

              </Left>
              <Body style={{marginLeft:150}}>
                    <Title style={{color:'black'}}>Daily Time Record</Title>
              </Body>
          </Header>*/}

          <Content padder style={{backgroundColor:'#f39c12',}}>
            <Form style={{width:400,marginLeft:250, }}>
                <Text style={{color:'white', fontSize:40,marginLeft:150,}}>{txtdate_}</Text>
              <Item stackedLabel style={{marginTop:10,}}>
                  <Label>Username</Label>
                  <Input />
              </Item>
              <Item stackedLabel >
                  <Label>Password</Label>
                  <Input />
              </Item>

                <Button transparent style={{width:200,marginTop:10}}
                    onPress={()=> this.props.navigation.navigate("Logins")}
                >
                    <Text>Login to Account</Text>
                </Button>
              <InputGroup>

                <Button style={{width:380,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',}}
                    onPress={()=> this.props.navigation.navigate("DTRlist")}
                >
                    <Text>Time in</Text>
                </Button>
  						</InputGroup>

            <InputGroup>
                <Button style={{width:380,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',}}
                    onPress={()=> this.props.navigation.navigate("DrawerOpen")}
                >
                    <Text>Time out</Text>
                </Button>
  						</InputGroup>

            </Form>
          </Content>
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
});
