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


export default class NewEmployeepayinfoScreen extends Component<{}> {
  state={
      selected: 0
    }
  render() {
    var dt=new Date();
    txttime_=Moment(dt).format('hh:mm A');
    txtdate_=Moment(dt).format('LL');

    const CompanytableHead = ['Company Name', 'Address', 'Telephone No'];
        const CompanytableData = [
          ['Julies Bake Shop', 'Velez Street', '856-23359'],
          ['Arbies Bake Shop', 'Kauswagan CDO', '233-9563'],
        ];

        const EmployeetableHead = ['Employee Name', 'Position', 'Action'];
        const EmployeetableData = [
          ['Lyndell T. Dobluis', 'Back End Developer', ''],
          ['Jovan Olixua', 'Fron End Developer', ''],
        ];
    return (
      <Container>
        <Header style={{backgroundColor: '#FF9800',height:90,}}>
        <Left>

        </Left>
          <Body style={{marginLeft:150}}>
                <Title style={{fontSize:50,fontWeight:'bold'}}>{txttime_}</Title>
                <Title style={{fontSize:20,marginLeft:35}}>{txtdate_}</Title>
          </Body>
          <Right>
              <Button
                transparent
                  onPress={()=> this.props.navigation.navigate("Home")}>
                  <Text style={{color:'black'}}>Log-Out</Text>
              </Button>

          </Right>
      </Header>
            <Tabs>
             <Tab heading="MY EMPLOYEES" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#ecf0f1'}}
                 activeTextStyle={{color: 'black', fontWeight: 'bold'}}
             >
                 <Content>
                    <Header style={{backgroundColor: '#ecf0f1'}}>
                    <Button
                          transparent
                          onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                          <Icon name="menu" style={{color: 'black'}} />
                     </Button>
                        <Left>
                            <Title style={{color: 'black'}}>MANAGE EMPLOYEE PROFILE</Title>
                        </Left>
                        <Body>

                        </Body>
                    </Header>
                        <View style={{flex: 1,flexDirection: 'row',marginTop:10}}>
                        
                            <InputGroup style={{marginLeft:10,borderColor:'#ecf0f1'}}>
                              <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                                <Button
                                    onPress={()=> this.props.navigation.navigate("NewEmployee")}>
                                    <Text style={{color:'black'}}>PERSONEL INFO</Text>
                                </Button>

                                <InputGroup style={{marginLeft:10,marginTop:5,borderColor:'#ecf0f1'}}>
                                  <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                                    <Button
                                        onPress={()=> this.props.navigation.navigate("NewEmployeepayinfo")}>
                                        <Text style={{color:'black',fontWeight:'bold'}}>PAY INFO</Text>
                                    </Button>
                                </Segment>
                                </InputGroup>

                                <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                                  <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                                    <Button
                                        onPress={()=> this.props.navigation.navigate("Home")}>
                                        <Text style={{color:'black'}}>VIEW TIMESHEET</Text>
                                    </Button>
                                  </Segment>
                                </InputGroup>

                                <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                                  <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                                    <Button
                                        onPress={()=> this.props.navigation.navigate("Home")}>
                                        <Text style={{color:'black'}}>REMOVE EMPLOYEE</Text>
                                    </Button>
                                  </Segment>
                                </InputGroup>

                                <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                                  <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                                    <Button
                                        onPress={()=> this.props.navigation.navigate("Home")}>
                                        <Text style={{color:'black'}}>BACK</Text>
                                    </Button>
                                  </Segment>
                                </InputGroup>
                              </Segment>
                            </InputGroup>
                        </View>

                      {/*<Form style={{flex: 1,flexDirection: 'row', marginLeft:270}}>
                        <InputGroup>
                          <Item style={{backgroundColor:'red',width:670,marginTop:5,height:50,}}>
                              <Text style={{fontSize:24,fontWeight:'bold',marginTop:-20,marginLeft:5,textDecorationLine:'underline'}}>EMPLOYEE PAY INFORMATIONS</Text>
                              <Text style={{fontSize:20,fontWeight:'bold',marginTop:30, marginLeft:-350}}>As of {txtdate_}</Text>
                          </Item>
                        </InputGroup>
                        <InputGroup>
                          <Item style={{backgroundColor:'blue',width:250,marginTop:5,}}>*/}
                              {/*<Text style={{fontSize:20,fontWeight:'bold'}}>PAY INFORMATION</Text>*/}
                          {/*</Item>
                        </InputGroup>
                      </Form>*/}

                    {/*<InputGroup style={{marginLeft:10,marginTop:-40,borderColor:'#ecf0f1'}}>
                      <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                        <Button
                            onPress={()=> this.props.navigation.navigate("NewEmployee")}>
                            <Text style={{color:'black'}}>PERSONEL INFO</Text>
                        </Button>
                      </Segment>
                    </InputGroup>
                    <InputGroup style={{marginLeft:10,marginTop:5,borderColor:'#ecf0f1'}}>
                      <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                        <Button
                            onPress={()=> this.props.navigation.navigate("NewEmployeepayinfo")}>
                            <Text style={{color:'black',fontWeight:'bold'}}>PAY INFO</Text>
                        </Button>
                    </Segment>
                    </InputGroup>
                    <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                      <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                        <Button
                            onPress={()=> this.props.navigation.navigate("Home")}>
                            <Text style={{color:'black'}}>VIEW TIMESHEET</Text>
                        </Button>
                      </Segment>
                    </InputGroup>
                    <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                      <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                        <Button
                            onPress={()=> this.props.navigation.navigate("Home")}>
                            <Text style={{color:'black'}}>REMOVE EMPLOYEE</Text>
                        </Button>
                      </Segment>
                    </InputGroup>

                    <InputGroup style={{marginLeft:10,marginTop:5, borderColor:'#ecf0f1'}}>
                      <Segment style={{backgroundColor:'#ecf0f1', borderColor:'#ecf0f1',width:250,}}>
                        <Button
                            onPress={()=> this.props.navigation.navigate("Home")}>
                            <Text style={{color:'black'}}>BACK</Text>
                        </Button>
                      </Segment>
                    </InputGroup>*/}

                </Content>
             </Tab>

             <Tab heading="PAYROLL" tabStyle={{backgroundColor: '#ecf0f1'}}
               textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#ecf0f1'}}
               activeTextStyle={{color: 'black', fontWeight: 'bold'}}
             >

                <Content>
                          <Table>
                            <Row data={EmployeetableHead} style={styles.head} textStyle={styles.rowText}/>
                            <Rows data={EmployeetableData} style={styles.row} textStyle={styles.text}/>
                          </Table>

                          <Button style={{width:300,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ecf0f1'}}
                              onPress={()=> this.props.navigation.navigate("DTRlist")}
                          >
                              <Text style={{color:'black'}}>Add New Employee</Text>
                          </Button>
               </Content>

             </Tab>

             <Tab heading="POLICIES" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#ecf0f1'}}
                 activeTextStyle={{color: 'black', fontWeight: 'bold'}}
             >
                 <Content>
                    <List dataArray={''}
                      renderRow={(item) =>
                      <ListItem>
                        <Left>
                            <Text>{item.Eatery}</Text>
                        </Left>
                          <Text note>{Moment(item.date_).format('L')}</Text>
                      </ListItem>
                    }>
                  </List>
                </Content>
             </Tab>

             <Tab heading="Report" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#ecf0f1'}}
                 activeTextStyle={{color: 'black', fontWeight: 'bold'}}
             >
                 <Content>
                    <List dataArray={''}
                      renderRow={(item) =>
                      <ListItem>
                        <Left>
                            <Text>{item.Eatery}</Text>
                        </Left>
                          <Text note>{Moment(item.date_).format('L')}</Text>
                      </ListItem>
                    }>
                  </List>
                </Content>
             </Tab>

            </Tabs>
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
