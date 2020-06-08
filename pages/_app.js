import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Nav from '../components/nav';
import Footer from '../components/footer'
import {GlobalProvider} from '../src/context/GlobalContext'
import { IntlProvider } from 'react-intl';
import translations from '../components/translate'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    const [locale, setLocale] = useState('en');

    const handleChangeLocale = ({target: {value}}) => setLocale(value);

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalProvider>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <IntlProvider locale={locale} messages={translations[locale]}>
                        <Nav
                            locale={locale}
                            handleChangeLocale={handleChangeLocale}
                        />
                        <Component {...pageProps} />
                        <Footer />
                    </IntlProvider>
                </GlobalProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
