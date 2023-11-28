import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОТестПКMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-отчет-о-тест-п-к';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОТестПКMixin, Validations, {
});

defineProjections(Model);

export default Model;
