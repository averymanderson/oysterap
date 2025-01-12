/*global define */

define(function (require) {
	'use strict';

	return {
        checklist: require('tpl!templates/checklist.html'),
        nav: require('tpl!templates/nav.html'),
        task: require('tpl!templates/task.html'),
        taskrule: require('tpl!templates/task_rule.html'),
        wish: require('tpl!templates/wish.html'),
        basicadditem: require('tpl!templates/basicadditem.html'),
        piggybank: require('tpl!templates/piggy_bank.html'),
        history: require('tpl!templates/history.html'),
        addamazonwish: require('tpl!templates/addamazonwish.html'),
        wishlist: require('tpl!templates/wishlist.html'),
        settings: require('tpl!templates/settings.html'),
        editrecurringtaskview: require('tpl!templates/editrecurringtaskview.html'),
        editwish: require('tpl!templates/editwish.html'),
	message: require('tpl!templates/message.html'),
	};
});

