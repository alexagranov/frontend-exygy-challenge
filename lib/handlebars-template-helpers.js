import fs from 'fs';
import Handlebars from 'handlebars-template-loader/runtime';
import * as handlebarsHelpers from '../../frontend-challenge-pattern-library/handlebars-helpers.js';
import avatarInitials from '../../frontend-challenge-pattern-library/src/materials/atoms/components/avatar-initials.html'
import iconBase from '../../frontend-challenge-pattern-library/src/materials/atoms/icons/icon-base.html'

export const loadPartials = () => {
    Handlebars.registerPartial('components.avatar-initials', avatarInitials);
    Handlebars.registerPartial('icons.icon-base', iconBase);
};

const initHandlebarsHelpers = () => {
    Object.keys(handlebarsHelpers).forEach(helper => {
        Handlebars.registerHelper(helper, handlebarsHelpers[helper]);
    });
};

export default initHandlebarsHelpers;
