/**
 * NewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    //a Create action
    create: function(req, res, next) {
        var params = req.allParams();
        sails.log('I am a debug-level message', params);
        News.create(params, function(err, news) {
            if (err) return next(err);
            
            res.status(201);
            res.json(news);
        });
    },

    find: function(req, res) {
        sails.log('I am a debug-level');
    }
};

