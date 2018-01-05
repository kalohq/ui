import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';
import React from 'react';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {...page, ...styles};
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Kalo Design System</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
