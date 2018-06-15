app.service('AddEntryService', function($http) {
    console.log('AddEntryService has been loaded');

    const self = this;
    self.entries = { list: [] }; 

self.getEntry = function() {
    return $http({
        method: 'GET',
        url:'/addEntry'
    }).then((response) => {
        console.log('Response from GET is: ', response);
        self.entries.list = response.data;
    })
    .catch((error) => {
        console.log('Error GET entries', error);
    });
}
self.addEntry = function (entry) {
    return $http({
        method: 'POST',
        url: '/addEntry',
        data: entry
    }).then((response) => {
        console.log('response', response);
        
    })
    .catch((error) => {
        console.log('error making request', error);
    });
}

self.getEntry();
});
