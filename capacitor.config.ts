
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'ionic svelte latest test.ionic.io';
const appName = 'ionic svelte latest test';
const server = process.argv.includes('-hmr') ? {
  'url': 'http://192.168.4.61:5173',   // always have http:// in url
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
  