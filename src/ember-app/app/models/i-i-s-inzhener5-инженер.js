import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнженерMixin
} from '../mixins/regenerated/models/i-i-s-inzhener5-инженер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнженерMixin, Validations, {
});

defineProjections(Model);

export default Model;
