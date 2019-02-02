/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
    category: [
        {
            name: 'Javascript',
            description: 'Includes javascript concepts and explaination'
        },
        {
            name: 'Stock',
            description: 'Share and provide the stock information'
        }
    ],
    overwrite: false
}
