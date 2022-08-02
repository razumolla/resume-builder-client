import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
export default function Chatbot() {

     const theme = {
          background: '#f5f8fb',
          fontFamily: 'Helvetica Neue',
          headerBgColor: '#EFf000',
          headerFontColor: '#fff',
          headerFontSize: '15px',
          botBubbleColor: '#EFf000',
          botFontColor: '#fff',
          userBubbleColor: '#fff',
          userFontColor: '#4a4a4a',
        };

  return (
    <div>
      <ThemeProvider theme={theme}>
<ChatBot

  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
/>
</ThemeProvider>

    </div>
  )
}
