import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-inzhener5-зак-менеджера', 'Unit | Serializer | i-i-s-inzhener5-зак-менеджера', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-inzhener5-зак-менеджера',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
