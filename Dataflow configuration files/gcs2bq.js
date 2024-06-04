function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.id = values[0];
    obj.first_name = values[1];
    obj.last_name = values[2];
    obj.email = values[3];
    obj.phone_number = values[4];
    obj.city = values[5];
    obj.state = values[6];
    obj.country = values[7];
    obj.zipcode = values[8];
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }