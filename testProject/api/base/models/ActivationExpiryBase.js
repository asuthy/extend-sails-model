/**
 * @class base.models.ActivationExpiryBase
 *
 * @extends base.Model
 *
 * Base model for adding activation and expiry date attributes
 */

module.exports = _.merge(_.cloneDeep(require('../Model')), {

    /**
     * @property {Object} attributes
     */
    attributes: {
        activation_date: {
            type: 'datetime',
            required: true,
            defaultsTo: function() {
                return new Date();
            }
        },
        expiry_date: {
            type: 'datetime',
            required: false,
            defaultsTo: function() {
                return undefined;
            }
        }
    }
});