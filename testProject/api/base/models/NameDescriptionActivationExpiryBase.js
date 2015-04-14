/**
 * @class base.models.NameDescriptionActivationExpiryBase
 *
 * @extends base.Model
 *
 * Base model for adding name, description, activation_date and expiry_date attributes
 */

module.exports = _.merge(
    _.cloneDeep(require('../Model')),
    _.merge(
        _.cloneDeep(require('./NameDescriptionBase')),
        _.cloneDeep(require('./ActivationExpiryBase'))
    )
);