import DS from 'ember-data';
import ENV from 'super-cool-app/config/environment';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default DS.JSONAPIAdapter.extend({
  ENV,
  authToken: readOnly('ENV.API.token'),

  headers: computed(function() {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${this.authToken}`
    };
  })
});
