import { Serializer as ИнженерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-inzhener5-инженер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнженерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
