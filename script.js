window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    const params = new URLSearchParams(window.location.search)
    if (params.has('test')) {
        if (params.get('test')) {
            // document.title = params.get('test');
            // return params.get('test');
            
            var jsonPerson = '{"first_name":"billy", "age":23}';
            console.log("returned")
            return jsonPerson
    }
  }
  });