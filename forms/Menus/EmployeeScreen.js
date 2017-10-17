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
} from "native-base";

 import {
  Platform,
  StyleSheet,
  View,
  Image,
} from 'react-native';
 import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { StackNavigator } from 'react-navigation';
import Moment from 'moment';
export default class EmployeeScreen extends Component<{}> {
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
             <Tab heading="Company" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
                 activeTextStyle={{color: 'black', fontWeight: 'normal'}}
             >
                 <Content>
                 <View>

                         <Table>
                           <Row data={CompanytableHead} style={styles.head} textStyle={styles.rowText}/>
                           <Rows data={CompanytableData} style={styles.row} textStyle={styles.text}/>
                         </Table>

                         <Button style={{width:300,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ecf0f1'}}
                             onPress={()=> this.props.navigation.navigate("DTRlist")}
                         >
                             <Text style={{color:'black'}}>Add New Company </Text>
                         </Button>

                 </View>
                </Content>
             </Tab>

             <Tab heading="New Employee" tabStyle={{backgroundColor: '#ecf0f1'}}
               textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
               activeTextStyle={{color: 'black', fontWeight: 'normal'}}
             >

                <Content>
                  <View>
                          <Table>
                            <Row data={EmployeetableHead} style={styles.head} textStyle={styles.rowText}/>
                            <Rows data={EmployeetableData} style={styles.row} textStyle={styles.text}/>
                          </Table>

                          <Button style={{width:300,marginTop:20,marginLeft:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ecf0f1'}}
                              onPress={()=> this.props.navigation.navigate("NewEmployee")}
                          >
                              <Text style={{color:'black'}}>Add New Employee</Text>
                          </Button>
                  </View>
               </Content>

             </Tab>

             <Tab heading="Payroll" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
                 activeTextStyle={{color: 'black', fontWeight: 'normal'}}
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

             <Tab heading="Policies" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
                 activeTextStyle={{color: 'black', fontWeight: 'normal'}}
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

             <Tab heading="Reports" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
                 activeTextStyle={{color: 'black', fontWeight: 'normal'}}
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
