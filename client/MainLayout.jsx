import React from 'react';
import {WelcomeComponent} from './WelcomeComponent.jsx';
import {Clock} from './Clock.jsx';
import {mount} from 'react-mounter';

const MainLayout = ({content}) => (
  <div>
    <header>
      <h1> Welcome to Meteor </h1>
    </header>
    <main>
      {content}
    </main>
  </div>
);

mount(MainLayout, {
  content: <Clock />
});