import { PLATFORM } from 'aurelia-pal';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('aurelia-dialog'))
    .feature('resources');

  aurelia.start().then(a => a.setRoot());
}
