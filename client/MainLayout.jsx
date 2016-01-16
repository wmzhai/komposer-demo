import React from 'react';
import {WelcomeComponent} from './WelcomeComponent.jsx';
import {mount} from 'react-mounter';

const MainLayout = ({content}) => (
  <div>
    <header>
      This is our header
    </header>
    <main>
      {content}
    </main>
    <footer>
      This is our footer.
    </footer>
  </div>
);

mount(MainLayout, {
  content: <WelcomeComponent name="Meteor" />
});