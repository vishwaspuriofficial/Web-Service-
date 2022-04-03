window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    document.cookie = "username=John Doe";
    console.log("Cookie Created");
    // const params = new URLSearchParams(window.location.search)
    // if (params.has('test')) {
    //     if (params.get('test')) {
    //         // document.title = params.get('test');
    //         // return params.get('test');
    //         document.cookie = "username=John Doe";
    //         console.log("Cookie Created");
    // }
//   }
  });