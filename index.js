import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import App from './App';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.setAttribute('id', 'scroll-fix');
  style.textContent = `
    html, body {
      height: auto !important;
      overflow-y: auto !important;
      background: #F0F4FF;
    }
    #root {
      min-height: 100vh !important;
    }
  `;
  document.head.appendChild(style);
}

registerRootComponent(App);
