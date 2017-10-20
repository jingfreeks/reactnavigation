/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
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
  StatusBar,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Moment from 'moment';
//import Popup from 'react-native-popup';


export default class HomeScreen extends Component<{}> {
  render() {
    var dt=new Date();
    txttime_=Moment(dt).format('hh:mm:ss A');
    txtdate_=Moment(dt).format('LL');
    days_= Moment(dt).format('dddd');
    upperdate_=days_.toUpperCase();
    //alert(upperdate_);
    shordays_=upperdate_=='SUNDAY' ? 'SUN':upperdate_=='MONDAY' ? 'MON':upperdate_=='TUESDAY'?'TUE':upperdate_=='WEDNESDAY'?'WED':
    upperdate_=='THURSDAY' ? 'THU':upperdate_=='FRIDAY'?'FRI':upperdate_=='SATURDAY'?'SAT':'SUN';
    //shordays_=upperdate_=='WEDNESDAY' ? alert(upperdate_):'AA'
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

          <Content style={{backgroundColor:'#ecf0f1'}}>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent:'center',
                alignItems:'center',
                marginTop:10,
              }}>

                <View style={{width: 391, height: 520, backgroundColor: '#D1D4D6',
                borderWidth: 1,
                borderRadius: 4,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                elevation: 1,

              }}>
                      {/* title header for login*/}
                    <View style={{
                       width: 389,
                       height: 100,
                       flex: 1,
                       flexDirection: 'column',
                       backgroundColor: '#D1D4D6',
                       justifyContent:'center',
                       alignItems:'center',

                     }}>
                          <View>
                            <Text style={{color:'#434646',fontFamily:'helvetica',fontSize:19,fontWeight:'300'}}>{txtdate_.toUpperCase()} {shordays_}</Text>
                          </View>
                          <View>
                            <Text style={{color:'#434646',fontFamily:'helvetica',fontSize:36,fontWeight:'bold',marginTop:-15}}>{txttime_}</Text>
                          </View>
                    </View>
                    <Form>
                      <View style={{
                        width: 389,
                        height: 120,
                        backgroundColor: 'white',
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <View style={{width:389,height: 130,backgroundColor:'white',marginTop:-10,
                            justifyContent:'center',
                            alignItems:'center',
                            flex: 1,
                            flexDirection: 'column',}}>

                            <Image style={{width:190,height:120,borderColor:'white'}}
                              source={require('../../image/binhilogo.png')}
                            />
                            <Text style={{color:'#434646',fontFamily:'helvetica light',fontSize:19,fontWeight:'300',marginTop:-20}}>PAYROLL SYSTEM</Text>
                        </View>
                      </View>
                      <View style={{width:389,height:280,backgroundColor:'white'}}>

                          <Item style={{width:337,backgroundColor:'#D1D4D6',margin:20,marginLeft:30}}>
                              <Icon active name='md-person' style={{marginLeft:20}}/>
                              <Input placeholder='Username...' style={{width:200}}/>
                          </Item>

                          <Item style={{width:337,backgroundColor:'#D1D4D6',marginLeft:30}}>
                              <Icon active name='md-person' style={{marginLeft:20}}/>
                              <Input placeholder='Password...' style={{width:200}}/>
                          </Item>

                      <View style={{width:389,backgroundColor:'white',marginTop:10,marginBottom:10,
                          justifyContent:'center',
                          alignItems:'center',
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                            <Button light style={{marginRight:10,marginLeft:10,width:165,
                              justifyContent:'center',
                              alignItems:'center',backgroundColor:'#434646',
                            }}>
                                <Text style={{ fontFamily:'helvetica light',
                                fontSize:20,
                                fontWeight:'300',color:'white'}}>TIME IN</Text>
                            </Button>
                            <Button light style={{width:165,justifyContent:'center',alignItems:'center',
                              alignItems:'center',backgroundColor:'#434646',}}>
                                <Text style={{ fontFamily:'helvetica light',
                                fontSize:20,
                                fontWeight:'300',color:'white'}}>TIME OUT</Text>
                            </Button>
                        </View>

                        <View style={{backgroundColor:'white',
                        justifyContent:'center',
                        alignItems:'center',
                        flex: 1,
                        flexDirection: 'row',marginBottom:10,height:30}}>

                        <Button light style={{width:343,marginLeft:9,justifyContent:'center',alignItems:'center',
                         alignItems:'center',alignItems:'center',backgroundColor:'#434646',}} onPress={this.handleOnPress}>

                            <Text style={{ fontFamily:'helvetica light',
                            fontSize:20,
                            fontWeight:'300',color:'white'}}>LOGIN</Text>
                        </Button>

                        </View>
                      </View>

                      </Form>
                      {/*<Form style={{width:396,height:265,backgroundColor:'white',borderColor:'white'}}>
                          <Item style={{width:337,backgroundColor:'pink',margin:20,marginLeft:30}}>
                              <Icon active name='md-person'/>
                              <Input placeholder='Username' style={{width:200}}/>
                          </Item>
                          <Item style={{width:337,backgroundColor:'pink',marginLeft:30}}>
                              <Icon active name='md-person'/>
                              <Input placeholder='Password' style={{width:200}}/>
                          </Item>
                      </Form>*/}
                </View>
             </View>
            {/*<Item style={{borderColor:'#FF9800'}}>
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


          </Form>*/}
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
