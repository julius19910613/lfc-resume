import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './style.css';
import Resume from './components/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="light"
      theme={{
        primaryColor: 'indigo',
        fontFamily: 'Inter, PingFang SC, Microsoft YaHei, Helvetica Neue, Arial, sans-serif',
        radius: {
          sm: '6px',
          md: '8px',
        },
      }}
    >
      <ModalsProvider>
        <Notifications position="top-right" />
        <Resume />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
