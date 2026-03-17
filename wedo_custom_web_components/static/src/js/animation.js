/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.AnimationBox = publicWidget.Widget.extend({
    selector: '.animation-box',
    events: {
        'click': '_onClick',
    },

    /**
     * @override
     */
    start() {
        console.log("Animation Box widget started!");
        return this._super(...arguments);
    },

    /**
     * @private
     * @param {Event} ev
     */
    _onClick(ev) {
        const target = ev.currentTarget;
        target.classList.toggle('clicked');

        const span = target.querySelector('span');
        if (target.classList.contains('clicked')) {
            if (span) span.textContent = 'Clicked!';
            target.style.backgroundColor = '#e04000';
        } else {
            if (span) span.textContent = 'Hover Me!';
            target.style.backgroundColor = '#00A09D';
        }
    },
});

export default publicWidget.registry.AnimationBox;
