const fs = require('fs');

/**
 * Load JSON data from a file.
 * @return {Object} Parsed JSON object from the file.
 * @throws {Error} If an error occurs while reading the file or parsing the JSON.
 */
const loadJsonFile = () => {
    try {
        const fileData = fs.readFileSync("./mock_application.json");
        return JSON.parse(fileData);
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        throw error;
    }
}

/**
 * Filter out duplicate items in an array based on the `key` property.
 * @param {Array} dataList - Array to filter.
 * @return {Array} Array with duplicates removed.
 * @throws {Error} If an error occurs during filtering.
 */
const filterDuplicates = (dataList) => {
    try {
        return dataList.reduce((result, current) => {
            if (!result.find(item => item.key === current.key)) {
                result.push(current);
            }
            return result;
        }, []);
    } catch (error) {
        console.error(`Error filtering duplicates: ${error}`);
        throw error;
    }
}

/**
 * Load JSON data, filter out duplicates, and return the cleaned data.
 * @return {Object} Cleaned JSON data.
 * @throws {Error} If an error occurs during the cleaning process.
 */
const createCleanData = () => {
    try {
        const initialData = loadJsonFile();
        initialData.versions.forEach((versionData) => {
            versionData.objects = filterDuplicates(versionData.objects);
            versionData.objects.forEach(object => object.fields = filterDuplicates(object.fields));
            versionData.scenes = filterDuplicates(versionData.scenes);
            versionData.scenes.forEach(scene => scene.views = filterDuplicates(scene.views));
        });
        return initialData;
    } catch (error) {
        console.error(`Error creating clean data: ${error}`);
        throw error;
    }
}

/**
 * Save cleaned data as a JSON file.
 * @param {Object} cleanData - Cleaned JSON data to write.
 * @throws {Error} If an error occurs during the file writing process.
 */
const saveCleanJson = (cleanData) => {
    try {
        fs.writeFileSync("./clean_application.json", JSON.stringify(cleanData, null, 2));
    } catch (error) {
        console.error(`Error writing to file: ${error}`);
        throw error;
    }
}

try {
    const cleanData = createCleanData();
    saveCleanJson(cleanData);
} catch (error) {
    console.error(`Error processing data: ${error}`);
}

module.exports = {
    loadJsonFile,
    filterDuplicates,
    createCleanData,
    saveCleanJson
};
