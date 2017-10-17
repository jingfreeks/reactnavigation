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


export default class LoginScreen extends Component<{}> {
  render() {
    var dt=new Date();
    txttime_=Moment(dt).format('hh:mm a');
    txtdate_=Moment(dt).format('LL');
    return (
      <Container>
          {/*<Header style={{backgroundColor: '#27ae60'}}>
              <Left>
                  <Button
                    transparent
                      onPress={()=> this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" />
                  </Button>

              </Left>
              <Body style={{marginLeft:150}}>
                    <Title>Log-in Menu</Title>
              </Body>
          </Header>*/}

          <Content style={{backgroundColor:'#FFC107',}}>
              <Item style={{borderColor:'#FFC107'}}>
                  <Image style={{width:150,height:100,marginLeft:10}}
                    source={require('../../image/binhilogo.png')}
                  />
                  <Text style={{color:'white', fontSize:40,marginLeft:200,}}>{txttime_}</Text>
            </Item>
                <Text style={{color:'white', fontSize:40,marginLeft:300,marginTop:-30}}>{txtdate_}</Text>
            <Item stackedLabel style={{width:450,height:100,marginTop:10,marginLeft:250}}>
                    <Label style={{fontSize:16,}}>Username</Label>
                    <Input />
                </Item>
            <Form>
              <InputGroup style={{width:450,height:100,marginLeft:250}}>
                  <Item stackedLabel >
                      <Label>Passwordss</Label>
                      <Input />
                  </Item>
              </InputGroup>

                <Button style={{width:450,marginTop:20,marginLeft:250,backgroundColor:'#ecf0f1',alignItems:'center',justifyContent:'center'}}
                    onPress={()=> this.props.navigation.navigate("DTR")}
                >
                    <Text style={{color:'black'}}>Log-in</Text>
                </Button>
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
