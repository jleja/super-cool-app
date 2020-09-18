import DS from 'ember-data';
import ENV from 'super-cool-app/config/environment';
import { get } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  ENV,
  get authToken() {
    return ENV.API.token;
  },

  get headers() {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${get(this, 'authToken')}`
    };
  }
});
