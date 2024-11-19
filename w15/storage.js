
const saveLS = (...arr) => {
    const serializedArr = JSON.stringify(...arr);
    localStorage.setItem("cfp", serializedArr);
};

const getLS = () => {
    const retrieveArr = localStorage.getItem("cfp");
    return retrieveArr !== null ? JSON.parse(retrieveArr) : [];
};
const mappedDataArr = data => {
    return data.map(data => data.total)
}
const mappedCfp = mappedDataArr(cfpData)
const reduce = data => {
    const reduceArr = data.reduce((sum, len) => sum + len, 0);
    return reduceArr
}
const avg = data.total / mappedDataArr.length

const cfpData = getLS();

export { cfpData, saveLS, getLS };
