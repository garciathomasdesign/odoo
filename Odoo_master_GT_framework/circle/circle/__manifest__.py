{
    'name': 'Circle Access',
    #We reccument to fork this manifest completely
    #dont forgot to add path in manifest file
    # Path will be like:  /home/{garciathomas-pc}/odoo16/custom/circle/
    'version':'1.8',
    'summary':'This is the plugin developed for internal testing expirence and fastst delivery',
    'sequence': -1,
    'description':'Circle is a collection of codes for odoo - 16 fully integrated with root and documented oriented plugin development ',
    'category':'owl',
    'depends':['base','web','point_of_sale'],
    'data':[],
    'demo':[],
    'installable':True,
    'application':True,
    'assets': {
        'point_of_sale.assets':[
            #the way circle calls the pos complete call structure
            'circle/static/src/pos/**/*.js',
            'circle/static/src/pos/**/*.xml',
            'circle/static/src/pos/**/*.scss',

        ]
    }

}