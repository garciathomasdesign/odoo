{
    'name': 'Circle Plugin',
    #We reccument to fork this manifest completely
    #dont forgot to add path in manifest file
    # Path will be like:  /home/{garciathomas-pc}/odoo16/custom/circle/
    'version':'1.8',
    'license':'Other proprietary',
    'author':'Garcia Thomas',
    'summary':'This is the plugin developed for internal testing expirence and fastst delivery',
    'sequence': -1,
    'description':'Circle is a collection of codes for odoo - 16 fully integrated with root and documented oriented plugin development ',
    'category':'owl',
    'website':'https://garciathomas.in/',
    'depends':['base','web','point_of_sale'],
    'data':[],
    'demo':[],
    'installable':True,
    'application':True,
    'assets': {
        'point_of_sale.assets':[
            #remove scss if you dont want a style in circle
            #the way circle calls the pos complete call structure
            'circle/static/src/pos/**/*.js',
            'circle/static/src/pos/**/*.xml',
            'circle/static/src/pos/**/*.scss',

        ]
    }

}