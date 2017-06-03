'use strict';

import mongoose from 'mongoose';

export function connect() {
    var conn = mongoose.connect('mongodb://localhost/react_app');
    var db = mongoose.connection;
    return db;
}
