app.controller('AddEntryController', function (AddEntryService) {
    console.log('AddEntryController has been loaded');
    const self = this;
    
    self.getEntry = function() {
        console.log('in self.getHeros');
        AddEntryService.getEntry().then(function(response){
        self.entries = AddEntryService.entries.list;
    });
}

    self.addEntry = function() {
        console.log('In addEntry');
        entry = {
            name: self.name,
            backstory: self.backstory
        }
        AddEntryService.getEntry(entry).then(function(){
        self.getEntry();
    })
    }
    

    // self.removeHero = function (hero) {
    //     // if(ship.current_crew > 0) {
    //     //     alert(`You can't delete a ship with crew on board!`);
    //     // } else {
    //         heroService.deleteHero(hero.id);
    //     // }
    // }
    self.getEntry();
});