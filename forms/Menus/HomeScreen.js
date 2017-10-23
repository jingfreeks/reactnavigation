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
  Modal,
  TouchableHighlight,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Moment from 'moment';

export default class HomeScreen extends Component<{}> {

state = {
  modalLogin: false,
  ModalTimeout: false,
  ModalTimein: false,
}

setModalLoginVisible(visible) {
this.setState({modalLogin: visible});
}

setModalTimeoutVisible(visible){
  this.setState({ModalTimeout:visible})
}

setModalTimeinVisible(visible){
  this.setState({ModalTimein:visible})
}

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
                marginTop:40,
              }}>

                <View style={{width: 370, height: 450, backgroundColor: '#D1D4D6',
                borderWidth: 1,
                borderRadius: 4,
                borderColor: '#ddd',
                borderBottomWidth: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                elevation: 10,

              }}>
                  {/* title header for login*/}
                    <View style={{
                       width: 389,
                       height: 40,
                       flex: 1,
                       flexDirection: 'column',
                       backgroundColor: '#D1D4D6',
                       justifyContent:'center',
                       alignItems:'center',

                     }}>
                          <View>
                            <Text style={{color:'#434646',fontFamily:'helvetica',fontSize:15,fontWeight:'300'}}>{txtdate_.toUpperCase()} {shordays_}</Text>
                          </View>
                          <View style={{marginTop:15}}>
                            <Text style={{color:'#434646',fontFamily:'helvetica',fontSize:25,fontWeight:'bold',marginTop:-15}}>{txttime_}</Text>
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

                            <Image style={{width:190,height:70,borderColor:'white'}}
                              source={require('../../image/binhilogo.png')}
                            />
                            <Text style={{color:'#434646',fontFamily:'helvetica light',fontSize:19,fontWeight:'300',marginTop:5}}>PAYROLL SYSTEM</Text>
                        </View>
                      </View>
                      <View style={{width:389,height:250,backgroundColor:'white'}}>

                          <Item style={{width:319,backgroundColor:'#D1D4D6',marginLeft:26,marginBottom:15}}>
                              <Icon active name='md-person' style={{marginLeft:20,color:'#838383'}}/>
                              <Input placeholder='Username...' style={{width:200,}}/>
                          </Item>

                          <Item style={{width:319,backgroundColor:'#D1D4D6',marginLeft:26}}>
                              <Icon active name='lock' style={{marginLeft:20,color:'#838383'}}/>
                              <Input placeholder='Password...' style={{width:200}}/>
                          </Item>

                      <View style={{width:389,backgroundColor:'white',marginTop:10,
                          justifyContent:'center',
                          alignItems:'center',
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                            <Button light style={{marginRight:13,width:154,
                              justifyContent:'center',
                              alignItems:'center',backgroundColor:'#434646',
                            }} onPress={() => {this.setModalTimeinVisible(true)}}>

                            <Image source={require('../../image/log-in-button.png')}/>
                                <View style={{position: 'absolute',justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{ fontFamily:'helvetica light',
                                  fontSize:18,
                                  fontWeight:'300',color:'white'}}>TIME IN</Text>
                                </View>
                            </Button>
                            <Button light style={{width:154,justifyContent:'center',alignItems:'center',
                              alignItems:'center',backgroundColor:'#434646',marginRight:18}}
                              onPress={() => {this.setModalTimeoutVisible(true)}}>
                              <Image source={require('../../image/log-in-button.png')}/>
                                <View style={{position: 'absolute',justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{ fontFamily:'helvetica light',
                                  fontSize:18,
                                  fontWeight:'300',color:'white'}}>TIME OUT</Text>
                                </View>
                            </Button>
                        </View>

                        <View style={{backgroundColor:'white',
                        justifyContent:'center',
                        alignItems:'center',

                        flex: 1,
                        flexDirection: 'row',marginBottom:10,height:30}}>

                        <Button light style={{width:323,marginRight:18,justifyContent:'center',alignItems:'center',
                         alignItems:'center',alignItems:'center',backgroundColor:'#434646',}}
                         onPress={() => {this.setModalLoginVisible(true)}}>
                            <Image source={require('../../image/log-in-button.png')}/>
                              <View style={{position: 'absolute',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{ fontFamily:'helvetica light',
                                fontSize:18,
                                fontWeight:'300',color:'white'}}>LOG IN</Text>
                              </View>
                        </Button>

                        </View>
                      </View>
                      {/*modal for error message*/}
                      <Modal
                               animationType="slide"
                               transparent={true}
                               visible={this.state.modalLogin}
                               onRequestClose={() => {alert("Modal has been closed.")}}
                               >
                               <View style={{
                                   flex: 1,
                                   flexDirection: 'column',
                                   justifyContent: 'center',
                                   alignItems: 'center'}}>

                             <View style={{
                                width: 450,
                                height: 200,
                                backgroundColor:'#e74c3c',
                                flexDirection: 'column',
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

                                <TouchableHighlight onPress={() => {
                                    this.setModalLoginVisible(!this.state.modalLogin)
                                  }} style={{
                                    marginLeft:400,
                                    height:26,
                                    backgroundColor:'#D1D4D6',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  }}>
                                    <Text style={{flex:1,flexDirection: 'column',fontWeight:'bold',fontSize:20}}>X</Text>
                                </TouchableHighlight>

                                  <View style={{
                                    width:450,
                                    height:190,
                                    backgroundColor:'white',marginTop:0,
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 4,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 4,
                                    elevation: 4,
                                    alignItems: 'center'
                                  }}>
                                     <Text style={{fontFamily:'helvetica',fontSize:40,fontWeight:'bold',color:'#e74c3c',marginTop:10}}>Error!</Text>
                                     <Text style={{fontFamily:'helvetica',fontSize:20,fontWeight:'300'}}>Your username or password is wrong</Text>

                                      <View style={{flex:1,flexDirection: 'row',marginTop:10}}>
                                       <TouchableHighlight onPress={() => {
                                           this.setModalLoginVisible(!this.state.modalLogin)
                                         }} style={{
                                           width:170,
                                           backgroundColor:'white',
                                           height:40,
                                           borderWidth: 1,
                                           borderRadius: 4,
                                           marginRight:10,
                                           alignItems: 'center',
                                           justifyContent:'center',
                                         }}>
                                           <Text style={{fontFamily:'helvetica',fontSize:15,fontWeight:'normal'}}>FORGOT PASSWORD</Text>
                                       </TouchableHighlight>

                                       <TouchableHighlight onPress={() => {
                                           this.setModalLoginVisible(!this.state.modalLogin)
                                         }} style={{
                                           width:170,backgroundColor:'white',
                                           height:40,
                                           borderWidth: 1,
                                           borderRadius: 4,
                                           marginRight:10,
                                           alignItems: 'center',
                                           justifyContent:'center'
                                         }}>
                                           <Text style={{fontFamily:'helvetica',fontSize:15,fontWeight:'normal'}}>TRY AGAIN</Text>
                                       </TouchableHighlight>
                                     </View>
                                 </View>
                             </View>
                            </View>
                        </Modal>
                      {/*Modal for success timeout*/}
                        <Modal
                                 animationType="slide"
                                 transparent={true}
                                 visible={this.state.ModalTimeout}
                                 onRequestClose={() => {alert("Modal has been closed.")}}
                                 >
                                 <View style={{
                                     flex: 1,
                                     flexDirection: 'column',
                                     justifyContent: 'center',
                                     alignItems: 'center'}}>

                               <View style={{
                                  width: 450,
                                  height: 200,
                                  backgroundColor:'#2C5C36',
                                  flexDirection: 'column',
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

                                  <TouchableHighlight onPress={() => {
                                      this.setModalTimeoutVisible(!this.state.ModalTimeout)
                                    }} style={{
                                      marginLeft:400,
                                      height:26,
                                      backgroundColor:'#D1D4D6',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}>
                                      <Text style={{flex:1,flexDirection: 'column',fontWeight:'bold',fontSize:20}}>X</Text>
                                  </TouchableHighlight>

                                    <View style={{
                                      width:450,
                                      height:190,
                                      backgroundColor:'white',marginTop:0,
                                      borderWidth: 1,
                                      borderRadius: 4,
                                      borderColor: '#ddd',
                                      borderBottomWidth: 4,
                                      shadowColor: '#000',
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowOpacity: 0.8,
                                      shadowRadius: 4,
                                      elevation: 4,
                                      alignItems: 'center'
                                    }}>
                                       <Text style={{fontFamily:'helvetica',fontSize:40,fontWeight:'bold',color:'#2C5C36',marginTop:10}}>Success!</Text>
                                       <Text style={{fontFamily:'helvetica',fontSize:20,fontWeight:'300'}}>Your time-out today is {txttime_}</Text>

                                        <View style={{flex:1,flexDirection: 'row',marginTop:10}}>
                                         <TouchableHighlight onPress={() => {
                                             {/*this.setModalTimeVisible(!this.state.ModalTimeout)*/}
                                             this.props.navigation.navigate("Dtremployee")
                                           }} style={{
                                             width:170,
                                             backgroundColor:'white',
                                             height:40,
                                             borderWidth: 1,
                                             borderRadius: 4,
                                             marginRight:10,
                                             alignItems: 'center',
                                             justifyContent:'center',
                                           }}>
                                             <Text style={{fontFamily:'helvetica',fontSize:15,fontWeight:'normal'}}>ok</Text>
                                         </TouchableHighlight>

                                       </View>
                                   </View>
                               </View>
                              </View>
                          </Modal>
                              {/*modal for time in*/}
                          <Modal
                                     animationType="slide"
                                     transparent={true}
                                     visible={this.state.ModalTimein}
                                     onRequestClose={() => {alert("Modal has been closed.")}}
                                     >
                                     <View style={{
                                         flex: 1,
                                         flexDirection: 'column',
                                         justifyContent: 'center',
                                         alignItems: 'center'}}>

                                   <View style={{
                                      width: 450,
                                      height: 200,
                                      backgroundColor:'#2C5C36',
                                      flexDirection: 'column',
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

                                      <TouchableHighlight onPress={() => {
                                          this.setModalTimeinVisible(!this.state.ModalTimein)
                                        }} style={{
                                          marginLeft:400,
                                          height:26,
                                          backgroundColor:'#D1D4D6',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}>
                                          <Text style={{flex:1,flexDirection: 'column',fontWeight:'bold',fontSize:20}}>X</Text>
                                      </TouchableHighlight>

                                        <View style={{
                                          width:450,
                                          height:190,
                                          backgroundColor:'white',marginTop:0,
                                          borderWidth: 1,
                                          borderRadius: 4,
                                          borderColor: '#ddd',
                                          borderBottomWidth: 4,
                                          shadowColor: '#000',
                                          shadowOffset: { width: 0, height: 2 },
                                          shadowOpacity: 0.8,
                                          shadowRadius: 4,
                                          elevation: 4,
                                          alignItems: 'center'
                                        }}>
                                           <Text style={{fontFamily:'helvetica',fontSize:40,fontWeight:'bold',color:'#2C5C36',marginTop:10}}>Success!</Text>
                                           <Text style={{fontFamily:'helvetica',fontSize:20,fontWeight:'300'}}>Your time-in today is {txttime_}</Text>

                                            <View style={{flex:1,flexDirection: 'row',marginTop:10}}>
                                             <TouchableHighlight onPress={() => {
                                                 this.setModalTimeinVisible(!this.state.ModalTimein)
                                               }} style={{
                                                 width:170,
                                                 backgroundColor:'white',
                                                 height:40,
                                                 borderWidth: 1,
                                                 borderRadius: 4,
                                                 marginRight:10,
                                                 alignItems: 'center',
                                                 justifyContent:'center',
                                               }}>
                                                 <Text style={{fontFamily:'helvetica',fontSize:15,fontWeight:'normal'}}>ok</Text>
                                             </TouchableHighlight>

                                           </View>
                                       </View>
                                   </View>
                                  </View>
                              </Modal>

                      </Form>
                </View>
             </View>
             <View>

             </View>
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
