/**
 * @class base.Model
 *
 * Base model that others are extended from
 */
module.exports = {

    /**
     * Check if the model has any associations other than to itself
     *
     * @return {boolean} true if the model has associations
     *
     */
    hasAssociations: function() {
        var associationIndex,
            association,
            associationType,
            modelName,
            model,
            associationCount = 0;

        for (associationIndex in this.associations) {
            association = this.associations[associationIndex];
            associationType = association.type;

            if (associationType == 'model') {
                modelName = association.model;
            } else if (associationType == 'collection') {
                modelName = association.collection;
            }

            model = sails.models[modelName];

            if (model != this) {
                associationCount++;
            }
        }

        if (associationCount > 0) {
            return true;
        } else {
            return false;
        }
    }
};