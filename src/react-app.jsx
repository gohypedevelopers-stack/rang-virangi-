import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './react-app.css';

const getProps = (el) => ({
  title: el.dataset.title || 'React is running',
  body: el.dataset.body || 'This section is rendered with React. Edit the text in the theme editor.',
  buttonLabel: el.dataset.buttonLabel || 'Click me',
  secondaryLabel: el.dataset.secondaryLabel || 'Reset',
  sectionId: el.dataset.sectionId || ''
});

import EvrydaeHome from './EvrydaeHome';

function App(props) {
  return (
    <div className="react-app-wrapper" data-section-id={props.sectionId}>
      <EvrydaeHome />
    </div>
  );
}

const mount = (el) => {
  if (!el || el.__reactRoot) {
    return;
  }

  const root = createRoot(el);
  el.__reactRoot = root;
  root.render(<App {...getProps(el)} />);
};

const unmount = (el) => {
  if (el && el.__reactRoot) {
    el.__reactRoot.unmount();
    el.__reactRoot = null;
  }
};

const init = (scope = document) => {
  scope
    .querySelectorAll('[data-react-root="true"]')
    .forEach((node) => mount(node));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => init(document));
} else {
  init(document);
}

document.addEventListener('shopify:section:load', (event) => {
  init(event.target);
});

document.addEventListener('shopify:section:unload', (event) => {
  const node = event.target.querySelector('[data-react-root="true"]');
  if (node) {
    unmount(node);
  }
});
