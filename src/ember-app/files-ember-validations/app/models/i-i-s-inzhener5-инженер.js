import {
  defineNamespace,
  defineProjections,
  Model as ИнженерMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-инженер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнженерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
