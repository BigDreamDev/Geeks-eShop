'use strict';

/**
 * laptop service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::laptop.laptop');
