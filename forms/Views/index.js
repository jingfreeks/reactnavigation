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

import HomeScreen from "./DTRlist.js";

export default HomeScreenRouter = DrawerNavigator({
        Home:{ screen: HomeScreen},
        DTR: {screen:DTRScreen}
  },
);
export default HomeScreenRouter;
