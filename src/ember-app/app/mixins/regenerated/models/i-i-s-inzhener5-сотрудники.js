import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер_Телефона: DS.attr('string'),
  фИО: DS.attr('string'),
  закМенеджера: DS.belongsTo('i-i-s-inzhener5-зак-менеджера', { inverse: null, async: false })
});

export let ValidationRules = {
  номер_Телефона: {
    descriptionKey: 'models.i-i-s-inzhener5-сотрудники.validations.номер_Телефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-inzhener5-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  закМенеджера: {
    descriptionKey: 'models.i-i-s-inzhener5-сотрудники.validations.закМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-inzhener5-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    номер_Телефона: attr('Номер_ телефона', { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-inzhener5-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    номер_Телефона: attr('Номер_ телефона', { index: 1 })
  });
};
