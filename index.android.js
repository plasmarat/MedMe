/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//import * as auth1 from './src/components/auth1.js'
import * as auth2 from './src/components/auth2.js'


var React = require('react-native');
var {
  AppRegistry,
} = React;


//AppRegistry.registerComponent('MedMe', () => auth1.auth1);
AppRegistry.registerComponent('MedMe', () => auth2.auth2);
