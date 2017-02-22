const mapper = {
    'Ac': 'actors',
    'Di': 'directors',
    'Pr': 'producers',
    'Mu': 'composers',
    'Ly': 'lyricists',
    'Le': 'lead_actors',
    'Gu': 'guests',
    'Si': 'singers',
    'images': 'images',
    'actors': 'actors',
    'directors': 'directors',
    'producers': 'producers',
    'composers': 'composers',
    'lyricists': 'lyricists',
    'lead_actors': 'lead_actors',
    'guests': 'guests',
    'singers': 'singers'
};
const handler = {
    get: function(target, name) {

        if (name in mapper) {

            if (target[name]) {
                return target[name]
            } else {
                let arr = []
                target[name] = arr
                return target[name]
            }
        }else{
          return target[name]
        }
    }
};

const p = new Proxy({}, handler);

p[mapper['Ac']].push(5)
p[mapper['Di']].push(1)
p[mapper['Di']].push(2)
p[mapper['images']].push(2)
p[mapper['images']].push(22)
p.languages = 9
console.log(p)
console.log(JSON.stringify(p))
