import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Header,Tabs,Tab } from "native-base";
const routes = ["Home", "DTR"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container >
        <Header>
        </Header>
        <Content>
        <Tabs>
             <Tab heading="My Employees" tabStyle={{backgroundColor: '#ecf0f1'}}
                 textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#FF9800'}}
                 activeTextStyle={{color: 'black', fontWeight: 'normal'}}
             >
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data)}>
                    <Text>{data}</Text>
                  </ListItem>
                );
              }}
            />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
