import Reactotron, { trackGlobalErrors } from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux'

if (process.env.NODE_ENV !== 'production') {
  const reactotron = Reactotron.configure()
  .use(trackGlobalErrors())
  .use(reactotronRedux())
  .connect()

  console.tron = reactotron;
  reactotron.clear();
}

