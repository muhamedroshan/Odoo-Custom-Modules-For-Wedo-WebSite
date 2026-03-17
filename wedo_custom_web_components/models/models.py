# -*- coding: utf-8 -*-

from odoo import models, fields, api

# class WedoCustomWebComponents(models.Model):
#     _name = 'wedo_custom_web_components.wedo_custom_web_components'
#     _description = 'wedo_custom_web_components.wedo_custom_web_components'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
