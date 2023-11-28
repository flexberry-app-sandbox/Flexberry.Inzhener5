import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  товар: DS.attr('string'),
  закМенеджера: DS.belongsTo('i-i-s-inzhener5-зак-менеджера', { inverse: null, async: false }),
  инженер: DS.belongsTo('i-i-s-inzhener5-инженер', { inverse: null, async: false }),
  отчетОТестПК: DS.belongsTo('i-i-s-inzhener5-отчет-о-тест-п-к', { inverse: null, async: false })
});

export let ValidationRules = {
  товар: {
    descriptionKey: 'models.i-i-s-inzhener5-номенклатура.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  закМенеджера: {
    descriptionKey: 'models.i-i-s-inzhener5-номенклатура.validations.закМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инженер: {
    descriptionKey: 'models.i-i-s-inzhener5-номенклатура.validations.инженер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчетОТестПК: {
    descriptionKey: 'models.i-i-s-inzhener5-номенклатура.validations.отчетОТестПК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-inzhener5-номенклатура', {
    товар: attr('Товар', { index: 0 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-inzhener5-номенклатура', {
    товар: attr('Товар', { index: 0 })
  });
};
