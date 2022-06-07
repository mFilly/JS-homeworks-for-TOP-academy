/**
 * @param {Object[]} user
 * @param {number} user[].id
 * @param {boolean} user[].hasPaid
 */
 function upgradeUser(user) {
	user.hasPaid=!user.hasPaid
    console.log(user);
    return user// your code
}

// Sample usage - do not modify
upgradeUser({id: 1, hasPaid: false});
upgradeUser({id: 2, hasPaid: false});