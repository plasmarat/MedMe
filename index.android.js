/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import * as auth1 from './src/auth1.js'


var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


AppRegistry.registerComponent('MedMe', () => auth1.auth1);
