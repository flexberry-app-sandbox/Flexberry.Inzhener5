import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-т-ч-отчет-о-тест-п-к';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧОтчетОТестПКMixin, Validations, {
});

defineProjections(Model);

export default Model;
