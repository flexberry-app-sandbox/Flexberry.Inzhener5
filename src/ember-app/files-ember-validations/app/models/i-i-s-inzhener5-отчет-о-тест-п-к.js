import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-отчет-о-тест-п-к';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОТестПКMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
