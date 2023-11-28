import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-inzhener5-инженер', 'Unit | Model | i-i-s-inzhener5-инженер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-inzhener5-зак-менеджера',
    'model:i-i-s-inzhener5-инженер',
    'model:i-i-s-inzhener5-клиенты',
    'model:i-i-s-inzhener5-номенклатура',
    'model:i-i-s-inzhener5-отчет-о-тест-п-к',
    'model:i-i-s-inzhener5-сотрудники',
    'model:i-i-s-inzhener5-т-ч-зак-менеджера',
    'model:i-i-s-inzhener5-т-ч-отчет-о-тест-п-к',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
