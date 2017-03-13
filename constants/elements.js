/**
 * Elements
 *
 * Used to share common elements across all modules,
 * in order to avoid multiple DOM queries.
 *
 * import { $body } from 'constants/elements';
 * $body.addClass('something');
 */

import jQuery from 'jquery';
export const $ = jQuery;
export const $win = $(window);
export const $doc = $(document);
export const $body = $('body');