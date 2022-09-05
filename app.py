from random import sample
from flask import Flask, render_template, jsonify


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

sample_graph = {
                    'nodes': [
                      {'data': {'id':'1', 'name': 'Simvastatin', 'type_': 'drug' } },
                      {'data': {'id':'2','name':'HMGCR', 'type_': 'gene'} },
                      {'data': {'id':'3','name':'ITGAL', 'type_': 'gene'} },
                      {'data': {'id':'4','name':'Cardiovascular Disease', 'type_': 'disease'} }
                    ],
                    'edges': [
                      {'data' : {id: '12', 'source': '1', 'target': '2'}},
                      {'data' : {id: '13', 'source': '1', 'target': '3'}},
                      {'data' : {id: '14', 'source': '1', 'target': '4'}}    
                    ]
                  }


@app.route('/', methods=['GET'])
def home():
    return render_template("index.html")

@app.route('/api/search/', methods=['GET'])
def search():
    return sample_graph['nodes']



if __name__ == '__main__':
    
    app.run(host='0.0.0.0', debug=True)
