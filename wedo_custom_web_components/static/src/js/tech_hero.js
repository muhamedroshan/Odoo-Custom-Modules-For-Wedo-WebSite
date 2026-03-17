/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.TechHero = publicWidget.Widget.extend({
    selector: '.s_tech_hero',

    /**
     * @override
     */
    start() {
        this.gridWrapper = this.el.querySelector('.grid-wrapper');
        if (this.gridWrapper) {
            this._onMouseMove = this._onMouseMove.bind(this);
            document.addEventListener('mousemove', this._onMouseMove);
        }
        return this._super(...arguments);
    },

    /**
     * @override
     */
    destroy() {
        if (this.gridWrapper) {
            document.removeEventListener('mousemove', this._onMouseMove);
        }
        this._super(...arguments);
    },

    /**
     * @private
     * @param {MouseEvent} e
     */
    _onMouseMove(e) {
        // Calculate slight movement based on mouse position
        // The larger the divisor, the more subtle the movement
        const xOffset = (window.innerWidth / 2 - e.pageX) / 45;
        const yOffset = (window.innerHeight / 2 - e.pageY) / 45;

        this.gridWrapper.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    },
});

export default publicWidget.registry.TechHero;
