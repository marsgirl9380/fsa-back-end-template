
import { MongoClient } from 'mongodb';

const DB_NAME = 'my-database';

export const db = {
    _dbClient: null,
    connect: async function (url) {
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this._dbClient = client;
        
    },

    getConnection: function() {
        if (!this._dbClient) {
            console.log('You need to call the connect function first');
            process.exit(1);
        }

        return this._dbClient.db(DB_NAME);
    }
}