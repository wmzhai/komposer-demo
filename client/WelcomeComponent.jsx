import React from 'react';
import {mount} from 'react-mounter';

const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);

mount (WelcomeComponent, {name: 'Meteor'});