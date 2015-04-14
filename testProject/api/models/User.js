/**
 * @class models.User
 *
 * @extends base.Model
 *
 * Model for users
 */
module.exports = _.merge(_.cloneDeep(require('../base/models/NameDescriptionActivationExpiryBase')), {

    /**
     * @property {Object} attributes
     */
    attributes: {
        user_attribute: {
            type: 'string',
            required: false,
            required: true,
            defaultsTo: 'test user attribute'
        }
    }
});