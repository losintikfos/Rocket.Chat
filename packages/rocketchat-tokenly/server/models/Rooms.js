RocketChat.models.Rooms.findByToknepass = function(tokens) {
	const query = {
		'tokenpass.token': {
			$in: tokens
		}
	};

	return this._db.find(query).fetch();
};

RocketChat.models.Rooms.setTokensById = function(_id, tokens) {
	const update = {
		$set: {
			'tokenpass.token': tokens
		}
	};

	return this.update({_id}, update);
};

// RocketChat.models.Rooms.setMinimumTokenBalanceById = function(_id, minimumTokenBalance) {
// 	const update = {
// 		$set: {
// 			'tokenpass.minimumBalance': minimumTokenBalance
// 		}
// 	};

// 	return this.update({_id}, update);
// };