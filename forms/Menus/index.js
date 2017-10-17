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
import { DrawerNavigator } from "react-navigation";

import HomeScreen from        "./HomeScreen.js";
import DTRScreen from         "./DTRScreen.js";
import SideBar from           "./SideBar.js";
import DTRlist from           "./DTRlist.js";
import LoginScreen from       "./LoginScreen.js";
import EmployeeScreen from    "./EmployeeScreen.js";
import NewEmployeeScreen from    "./NewEmployeeScreen.js";

const HomeScreenRouter = DrawerNavigator({
        Home:{ screen: HomeScreen},
        DTR: {screen:DTRScreen},
        DTRlist:{screen:DTRlist},
        Logins:{screen:LoginScreen},
        Employee:{screen:EmployeeScreen},
        NewEmployee:{screen:NewEmployeeScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
