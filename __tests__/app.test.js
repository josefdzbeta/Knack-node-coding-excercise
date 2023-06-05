const fs = require('fs');
const { loadJsonFile, filterDuplicates, createCleanData, saveCleanJson } = require('../app');  // replace with your actual file name

jest.mock('fs');

describe('loadJsonFile', () => {
    test('should parse JSON data from file', () => {
        fs.readFileSync.mockReturnValue(JSON.stringify({ test: 'data' }));

        const data = loadJsonFile();

        expect(data).toEqual({ test: 'data' });
    });
});

describe('filterDuplicates', () => {
    test('should filter out duplicate items based on the `key` property', () => {
        const duplicates = [
            { key: '1', value: 'first' },
            { key: '2', value: 'second' },
            { key: '1', value: 'duplicate' },
        ];

        const filtered = filterDuplicates(duplicates);

        expect(filtered).toEqual([
            { key: '1', value: 'first' },
            { key: '2', value: 'second' },
        ]);
    });
});

describe('createCleanData', () => {
    // We'll just test that it doesn't throw an error. A more detailed test would depend on your specific application logic.
    test('should not throw an error', () => {
        fs.readFileSync.mockReturnValue(JSON.stringify({ versions: [] }));

        expect(() => createCleanData()).not.toThrow();
    });
});

