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

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="react-app-card" data-section-id={props.sectionId}>
      <div className="react-app-header">
        <h2 className="h2">{props.title}</h2>
        {props.body ? <p className="react-app-body">{props.body}</p> : null}
      </div>
      <div className="react-app-actions">
        <button
          type="button"
          className="button button--primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          {props.buttonLabel} ({count})
        </button>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => setCount(0)}
        >
          {props.secondaryLabel}
        </button>
      </div>
      <p className="react-app-meta">Section: {props.sectionId}</p>
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
