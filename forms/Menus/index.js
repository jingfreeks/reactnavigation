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

import HomeScreen from            "./HomeScreen.js";
import DTRScreen from             "./DTRScreen.js";
import SideBar from               "./SideBar.js";
import EmployeePersonalInfoscreen from  "./EmployeePersonalInfoscreen.js";
import LoginScreen from       "./LoginScreen.js";
import EmployeeScreen from    "./EmployeeScreen.js";
import NewEmployeeScreen from    "./NewEmployeeScreen.js";
import DtremployeeScreen from    "./DtremployeeScreen.js";
//import NewEmployeepayinfoScreen from "./NewEmployeepayinfoScreen.js";
const HomeScreenRouter = DrawerNavigator({
        Home:{ screen: HomeScreen},
        DTR: {screen:DTRScreen},
        EmployeePersonalInfo:{screen:EmployeePersonalInfoscreen},
        Logins:{screen:LoginScreen},
        Employee:{screen:EmployeeScreen},
        NewEmployee:{screen:NewEmployeeScreen},
        Dtremployee:{screen:DtremployeeScreen}
        //NewEmployeepayinfo:{screen:NewEmployeepayinfoScreen}
  },
  {
    contentComponent: props => <SideBar {...props} style={{width:200}}/>,
    drawerWidth: 300
  },

);
export default HomeScreenRouter;
