import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер_телефона: DS.attr('number'),
  фИО: DS.attr('string'),
  закМенеджера: DS.belongsTo('i-i-s-inzhener5-зак-менеджера', { inverse: null, async: false })
});

export let ValidationRules = {
  номер_телефона: {
    descriptionKey: 'models.i-i-s-inzhener5-клиенты.validations.номер_телефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-inzhener5-клиенты.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  закМенеджера: {
    descriptionKey: 'models.i-i-s-inzhener5-клиенты.validations.закМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-inzhener5-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    номер_телефона: attr('Номер_телефона', { index: 1 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-inzhener5-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    номер_телефона: attr('Номер_телефона', { index: 1 })
  });
};
