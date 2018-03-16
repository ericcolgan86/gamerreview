import _ from 'lodash';

    class StubGamesAPI {

        constructor() {
            this.games = [
                {
                    'id': 'MHW',
                    'name': 'Monster Hunter World',
                    'description': 'Eric86',
                    'image-url-small':'../../public/Images/MHS-SMALL.jpg',
                    'image-url-big':'../../public/Images/MHS-BIG.jpg',
                    'rating':'5'
                },
                {
                    'id': 'DS',
                    'name': 'Dark Souls',
                    'description': 'Eric86',
                    'image-url-small':'../../public/Images/DS-SMALL.jpg',
                    'image-url-big':'../../public/Images/DS-BIG.jpg',
                    'rating':'4'
                },
                {
                    'id': 'MGS',
                    'name': 'Metal Gear Solid',
                    'description': 'Metal Gear is a series of action-adventure stealth video games, created by Hideo Kojima and developed and published by Konami.The first game, Metal Gear,was released in 1987 for the MSX home computer architecture.',
                    'image-url-small':'../../public/Images/MGS-SMALL.jpg',
                    'image-url-big':'../../public/Images/MGS-BIG.jpg',
                    'rating':'3'
                }
            ] ; 
        }

        getAll() {
             return this.games;
        }

        getByID(id) {
            let game = _.find(this.games, function(g) { return g.id === id});
            return game;
       }
    }

    export default (new StubGamesAPI() );