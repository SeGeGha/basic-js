module.exports = function createDreamTeam(dreamTeamArray) {
  if (Array.isArray(dreamTeamArray)) {
    let nameDreamTeam = [];
        
    dreamTeamArray = dreamTeamArray.filter( value => typeof(value) == 'string')
                                   .map(name => name.replace(/\s+/g, ''));
    
    for (let i = 0; i < dreamTeamArray.length; i++) {
      nameDreamTeam.push(dreamTeamArray[i].slice(0, 1)
                                          .toUpperCase());
    }

    return nameDreamTeam.sort().join(''); 
  } else {
    return false;
  }
};