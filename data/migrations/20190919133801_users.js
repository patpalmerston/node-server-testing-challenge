exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();

		tbl
			.string('user_name', 128)
			.notNullable()
			.unique();

		tbl.string('post', 128);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
