'use strict';
export function close(db) {

    if (db) {
        db.close()
            .then(
            function () { },
            function (error) {
                console.log("Failed to close the database: " + error.message)
            }
            )
    }
}