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
export default class HomeScreen extends Component<{}> {
  render() {
    var dt=new Date();
    txttime_=Moment(dt).format('hh:mm A');
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

          <Content style={{backgroundColor:'#FF9800',}}>
            <Item style={{borderColor:'#FF9800'}}>
                  <Image style={{width:150,height:100, marginLeft:50}}
                    source={require('../../image/binhilogo.png')}
                  />
            </Item>
          <Form style={{width:400,marginLeft:270, }}>
            <Item style={{borderColor:'#FF9800',marginLeft:100,marginTop:-90}}>
                <Text style={{color:'white', fontSize:50,marginLeft:0,fontWeight:'bold'}}>{txttime_}</Text>
            </Item>
                <Text style={{color:'white', fontSize:20,marginLeft:130,}}>{txtdate_}</Text>
            <Item stackedLabel style={{marginTop:10}}>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item stackedLabel >
                <Label>Password</Label>
                <Input />
            </Item>

              <Button transparent style={{width:200,marginTop:10}}
                  onPress={()=> this.props.navigation.navigate("Employee")}
              >
                  <Text style={{color:'black',}}>Login to Account</Text>
              </Button>
            <InputGroup>

              <Button style={{width:380,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ecf0f1'}}
                  onPress={()=> this.props.navigation.navigate("DTRlist")}
              >
                  <Text style={{color:'black'}}>Time in</Text>
              </Button>
            </InputGroup>

          <InputGroup>
              <Button style={{width:380,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ecf0f1',}}
                  onPress={()=> this.props.navigation.navigate("DrawerOpen")}
              >
                  <Text style={{color:'black'}}>Time out</Text>
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
