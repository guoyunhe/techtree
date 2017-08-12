export const LOAD_ACTIVE_TECHES = 'LOAD_ACTIVE_TECHES';
export const ACTIVATE_TECH = 'ACTIVATE_TECH';
export const DEACTIVATE_TECH = 'DEACTIVATE_TECH';

/**
 * Load actiave teches from localStorage
 */
export function loadActiveTeches() {
    return {
        type: LOAD_ACTIVE_TECHES
    }
}

/**
 * Activate a tech with a mastery level
 * @param {string} techId
 * @param {number} level 1-5
 */
export function activateTech(techId, level = 1) {
    return {
        type: ACTIVATE_TECH,
        techId,
        level
    }
}

/**
 * Deactivate a tech
 * @param {string} techId
 */
export function deactivateTech(techId) {
    return {
        type: DEACTIVATE_TECH,
        techId
    }
}
