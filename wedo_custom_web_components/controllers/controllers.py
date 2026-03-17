# -*- coding: utf-8 -*-
from odoo import http

class WedoCustomWebComponents(http.Controller):
    @http.route('/wedo_custom_web_components/animation', auth='public', website=True)
    def animation_page(self, **kw):
        return http.request.render('wedo_custom_web_components.animation_page_template', {})
