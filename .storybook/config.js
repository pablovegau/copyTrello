import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';

import crfTheme from './crfTheme';
import bgcolors from './backgroundColors';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: crfTheme,
  },
  backgrounds: bgcolors,
});

addDecorator(withInfo);

addDecorator(centered);


addDecorator(withA11y);

// addDecorator(
//   withInfo({
//     inline: true,
//   }),
// );

addDecorator(withKnobs);

configure(loadStories, module);
