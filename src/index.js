import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Client from 'aws-appsync'
import {ApolloProvider} from 'react-apollo'
import {Rehydrated } from 'aws-appsync-react'
import AppSync from './Appync'

const client = new Client({
  url:AppSync.aws_appsync_graphqlEndpoint,
  region:AppSync.aws_appsync_region,
  auth:{
    type:'API_KEY',
    apiKey:AppSync.aws_appsync_apiKey
  }
})

const WithProvider =()=>{
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WithProvider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
