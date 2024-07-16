import { createBridgeComponent } from '@module-federation/bridge-react';
import WatchApp from './watchApp';

export default  createBridgeComponent({
  rootComponent: WatchApp
});