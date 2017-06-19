function objectValues(object){
    newArray = [];
    for (key in object){
        newArray.push(object[key]);
    }
    return newArray;
}

function keysToString(object){
    return Object.keys(object).join(' ');
}

function valuesToString(object){
    newArray = [];
    for (key in object){
        if(typeof object[key] === "string"){
            newArray.push(object[key]);
        }
    }
    return newArray.join(' ');
}

function arrayOrObject(object){
    if(Array.isArray(object)){
        return "array";
    }
    else {
        return "object";
    }
}

function capitalizeWord(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(string){
    newArray = string.split(' ');
    for(var i = 0; i < newArray.length; i++){
        newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
    }
    return newArray.join(' ');
}

function welcomeMessage(object){
    var capName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    return "Welcome " + capName + "!";
}

function profileInfo(object){
    var capName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    var capSpecies = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
    
    return capName + " is a " + capSpecies; 
}

function maybeNoises(object){
    if (!Array.isArray(object['noises']) || !object['noises'].length){
        return "there are no noises";
    }
    else {
        return object['noises'].join(' ');
    }
}

function hasWord(string, word){
    newArray = string.split(' ');
    for(var i = 0; i < newArray.length; i++){
        if(newArray[i] === word){
            return true;
        }
    }return false;
}

function addFriend(name, object){
    object.friends.push(name);
    return object;
}

function isFriend(name, object){
    if(object.hasOwnProperty('friends')){
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    }
    return false;
}    

function nonFriends(name, list){
    var strangers = [];

    for(var i = 0; i < list.length; i++){
            if (list[i]['name'] !== name) {
                var check = false
                for(var j = 0; j < list[i]['friends'].length; j++){
                    if (list[i]['friends'][j] === name){
                    check = true;
                    }
                    }if (check === false){
                        strangers.push(list[i]['name']);
                }
            }
        }
    return strangers;
}  

function updateObject(obj, keyName, newValue) {
    obj[keyName] = newValue;
    return obj;
}

function removeProperties(object, list){
    for (var i = 0; i < list.length; i++){
        if(object.hasOwnProperty(list[i])){
            delete object[list[i]];
        }
    }
}

function dedup(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            arr.splice(i+1, 1);
            i -= 1;
        }
    }
    return arr;
}