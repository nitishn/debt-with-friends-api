/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
	 * List all users in the system
 	 * @return {[object]}     Array containing all users in system
	 */
	list		: function(req, res) {
		User.find().exec( function(err, users) {
			return res.jsonp({
				error: err,
				data: users
			});
		});

	},

	/**
	 * Users are created upon sucessfully signing in/authenticating
	 * the very first time
	 */
	create 	: function(req, res) {
		User.create(
			{
				username 	: 'nitishn',
				email 		: 'nitishn@gmail.com',
				currency	: 'Brown Notes',
				debt 			: 0
			}).exec( function createdCB(err, created) {
			// Once user is created, save to the databse
			if( err ) return res.jsonp({error: err});
			created.save( function(err) {
				return res.jsonp({
					error: err,
					data: created
				});
			});
  	});
	},

	delete 	: function(req, res) {
		User.destroy({id: '55be993824b3a265ab7a5757'}).exec( function(err) {
			return res.jsonp({
				error: err,
				notice: 'Successfully deleted user'
			});
		});
	}
};
