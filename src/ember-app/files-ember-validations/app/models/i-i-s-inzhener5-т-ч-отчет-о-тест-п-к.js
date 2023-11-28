import {
  defineNamespace,
  defineProjections,
  Model as ТЧОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-т-ч-отчет-о-тест-п-к';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧОтчетОТестПКMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
