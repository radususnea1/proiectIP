'use strict';
import closeMongo from './closeMongo';

export function postDataMongo(app, db) {

    var student = { "status": "success", "message": "Authenticated", "data": { "user": { "id": 1, "email": "c0f45@example.com", "first_name": "John1", "last_name": "Doe1", "student_id": 1, "teacher_id": null, "management_id": null, "cnp": "4827109593237", "ic_serie": "7n", "ic_number": 119218, "date_birth": "1987-01-01", "address": "Str.Academiei, Nr1, Bucuresti", "phone_number": "868177592", "gender": "female", "father_first_name": "Maricica", "maiden_name": null, "admin_id": null, "created_at": "2016-04-26T18:45:36.767Z", "updated_at": "2017-05-27T10:46:44.762Z", "iban": "722446357903", "mother_first_name": "Gigi", "place_birth": "Str.Expirat, Nr1, Oras Capatul Lumii", "nationality": "Romanian", "secretary_id": null }, "provider": "autentificare", "id": "1", "info": { "email": "c0f45@example.com" }, "extra": { "first_name": "John1", "last_name": "Doe1", "email": "c0f45@example.com", "student": "true", "teacher": "false", "management": "false", "admin": "false", "groups": { "data": [{ "id": 1, "serie": 5, "year": 3, "specialization": "Matematica", "management_id": 1, "created_at": "2016-04-26T18:45:36.612Z", "updated_at": "2016-04-26T18:45:36.612Z", "group_number": 2 }, { "id": 6, "serie": 5, "year": 3, "specialization": "Matematica", "management_id": 1, "created_at": "2016-04-26T18:45:36.656Z", "updated_at": "2016-04-26T18:45:36.656Z", "group_number": 2 }] } }, "tokens": [] } }
    var asd = JSON.parse(student);

    db.collection('studenti').save(student, (err, result) => {
        console.log('Autentificare in auth?????????????????????????????????????????????????????????????????')
        if (err) {
            return console.log(err);
        }
    })
    closeMongo(db);
}