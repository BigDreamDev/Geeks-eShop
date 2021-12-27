'use strict';

/**
 * desktop service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::desktop.desktop');
