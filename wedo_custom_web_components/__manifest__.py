{
    'name': "wedo_custom_web_components",
    'summary': "Custom interactive animations for Wedo Website",
    'description': """
        This module adds custom interactive animations to the website.
    """,
    'author': "My Company",
    'website': "https://www.yourcompany.com",
    'category': 'Website',
    'version': '0.1',
    'depends': ['website'],
    'data': [
        'views/snippets/s_interactive_animation.xml',
        'views/snippets/s_tech_hero.xml',
        'views/snippets/s_what_we_do.xml',
        'views/snippets/s_company_trust.xml',
        'views/snippets/options.xml',
        'views/templates.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'wedo_custom_web_components/static/src/css/animation.css',
            'wedo_custom_web_components/static/src/js/animation.js',
            'wedo_custom_web_components/static/src/css/tech_hero.css',
            'wedo_custom_web_components/static/src/js/tech_hero.js',
            'wedo_custom_web_components/static/src/css/what_we_do.css',
            'wedo_custom_web_components/static/src/css/company_trust.css',
        ],
    },
    'demo': [],
}
