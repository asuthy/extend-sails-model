/**
 * @class base.models.NameDescriptionBase
 *
 * @extends base.Model
 *
 * Base model for adding name and description attributes
 */

module.exports = _.merge(_.cloneDeep(require('../Model')), {

    /**
     * @property {Object} attributes
     */
    attributes: {
        name: {
            type: 'string',
            required: true,
            defaultsTo: 'test name'
        },
        description: {
            type: 'string',
            required: true,
            defaultsTo: 'test description'
        }
    }
});