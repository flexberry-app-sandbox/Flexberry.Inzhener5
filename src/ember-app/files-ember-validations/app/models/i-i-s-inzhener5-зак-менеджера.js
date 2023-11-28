import {
  defineNamespace,
  defineProjections,
  Model as ЗакМенеджераMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-зак-менеджера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗакМенеджераMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
