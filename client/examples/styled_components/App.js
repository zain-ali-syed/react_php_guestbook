import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeRed, ThemeGreenOrange } from './Theme';
import { Button, SubmitButton, CancelButton } from './styled_elements';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Header2 from './components/Header2';
import GlobalStyles from './GlobalStyles';

/*

WHERE TO GO LINKS:
Styled Components documentation: https://www.styled-components.com/docs

Emotion: https://emotion.sh

Awesome Styled Components Github repository: https://github.com/styled-components/awesome-styled-components


CHECK OUT THE REAL APP SECTION in THE ABOVE LINK TO SEE HOW PEOPEL ARE STYLING









*/

class App extends Component {
  state = {
    theme: ThemeRed
  };

  changeTheme = () => {
    this.setState(prevState => {
      if (prevState.theme === ThemeRed) return { theme: ThemeGreenOrange };
      return { theme: ThemeRed };
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyles />
          <Header2 />
          <div>I am React</div>
          <Button>Default button</Button>
          <Button size="small" onClick={this.changeTheme}>
            Change Theme
          </Button>
          <SubmitButton size="medium">Medium Submit</SubmitButton>
          <CancelButton size="large">Large Cancel</CancelButton>
          <hr />
          <AboutUs />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
