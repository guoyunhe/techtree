import { LOAD_ACTIVE_TECHES, ACTIVATE_TECH, DEACTIVATE_TECH } from '../actions/activeTeches'

const defaultState = {};

export default function activeTeches(state = defaultState, action) {
    switch (action.type) {
        case LOAD_ACTIVE_TECHES:
            return JSON.parse(localStorage.getItem('activeTeches')) || {};
        case ACTIVATE_TECH:
            let activatedState = {
                ...state,
                [action.techId]: action.level
            };
            localStorage.setItem('activeTeches', JSON.stringify(activatedState));
            return {...activatedState};

        case DEACTIVATE_TECH:
            let deactivatedState = state;
            delete deactivatedState[action.techId];
            localStorage.setItem('activeTeches', JSON.stringify(deactivatedState));
            return {...deactivatedState};
        default:
            return state;
    }
}

/**
 * @param {Object} state The root state of Redux
 * @param {string} techId
 * @return {boolean}
 */
export function isTechActive(state, techId) {
    return state.activeTeches && state.activeTeches[techId]
}

/**
 * @param {Object} state The root state of Redux
 * @param {string} techId
 * @return {number} 0-5
 */
export function getTechLevel(state, techId) {
    return state.activeTeches[techId] || 0
}
