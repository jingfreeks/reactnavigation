import React from "react";
import { AppRegistry, Image, StatusBar,View } from "react-native";
import { Container, Content, Text, List, ListItem,Header,Tabs,Tab } from "native-base";
const routes = [
  {
      value:"Home",
      datavalue:"Home"
  },
  {
     value:"Daily Time Reacord",
     datavalue: "Employee"
   },
   {
     value:"Personal Info",
     datavalue: "EmployeePersonalInfo"
   }
 ];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor:'#505251'}}>
        <Header style={{height:100,backgroundColor:'#505251'}}>
        </Header>
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem style={{backgroundColor:'transparent'}}
                    button
                    onPress={() => this.props.navigation.navigate(data.datavalue)}>
                    <Text style={{color:'white'}}>{data.value}</Text>
                  </ListItem>
                );
              }}
            />
          <List />
    </Container>
    );
  }
}
