// DO WHATEVER YOU WANT HERE


const createEnumerableProperty = (propertyName) => {return propertyName;};
const createNotEnumerableProperty = (propertyName) => {return Symbol(propertyName);};
const createProtoMagicObject = () => {};
const incrementor = () => {    
        if(!incrementor.k) incrementor.k = 0;
        incrementor.valueOf = function(){return  incrementor.k;}      
        incrementor.k++;
        return incrementor;
    };
const asyncIncrementor = () => {
        if(!asyncIncrementor.k) asyncIncrementor.k = 0;
        asyncIncrementor.valueOf = function(){return  asyncIncrementor.k;}      
        asyncIncrementor.k++;
        return asyncIncrementor;
    };
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;