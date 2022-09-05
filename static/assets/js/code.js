var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
  
    style: [
      {
        selector: 'node',
        css: {
          'label': "data(name)", 
          // 'content': 'data(id)',
          // 'background-color': 'red',
          height: "60px",
          width: "100px",
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: "node[type_='drug']",
        css: {
          'background-color': 'red'
        }
      },
      {
        selector: "node[type_='gene']",
        css: {
          'background-color': 'green'
        }
      },
      {
        selector: "node[type_='disease']",
        css: {
          'background-color': 'yellow'
        }
      },
      {
        selector: ':parent',
        css: {
          
          'text-valign': 'top',
          'text-halign': 'center',
        }
      },
      {
        selector: 'edge',
        css: {
          'curve-style': 'unbundled-bezier ',
          'target-arrow-shape': 'triangle'
        }
      }
    ],
  
    elements: {

      nodes: [
        {'data': {'id':'1', 'name': 'Simvastatin', 'type_': 'drug' } },
        {'data': {'id':'2','name':'HMGCR', 'type_': 'gene'} },
        {'data': {'id':'3','name':'ITGAL', 'type_': 'gene'} },
        {'data': {'id':'4','name':'Cardiovascular Disease', 'type_': 'disease'} }
      ],
      edges: [
        {data : {id: '12', source: '1', target: '2'}},
        {data : {id: '13', source: '1', target: '3'}},
        {data : {id: '14', source: '1', target: '4'}}    
      ]
    },
  
    layout: {
      name: 'concentric',
      padding: 20
    },
  });
  
  