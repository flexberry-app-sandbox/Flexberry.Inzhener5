import {
  defineNamespace,
  defineProjections,
  Model as ТЧЗакМенеджераMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-т-ч-зак-менеджера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗакМенеджераMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
