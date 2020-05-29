import * as dev from './env.dev';
import * as prod from './env.prod';

const env = process.env.NODE_ENV;

let environment = dev;

if (env !== 'development') {
  environment = prod;
}

export { environment };
