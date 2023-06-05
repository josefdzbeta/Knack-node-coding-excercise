# Knack - Take home excercise

The purpose of this coding exercise is to create a Node.js application that can programmatically remove all duplicate fields and objects from the given mock application schema and output a new sanitized version.

## Table of Contents
- [Getting Started](#getting-started)
- [Requisites](#requisites)
- [Usage](#usage)
- [Testing](#testing)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/en/download/).

### Requisites

The code should be written in Javascript or Typescript and utilize the Node.js framework
We expect tests (unit tests on business logic, etc. - whatever you are comfortable with)
We expect to see documentation in the form of a README
We're looking for code that would be easy to maintain
We're looking for code that would scale

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/josefdzbeta/Knack-node-coding-excercise.git
    ```

2. Navigate to the project directory:

    ```
    cd knack-node-coding-exercise
    ```

3. Install the dependencies:

    ```
    npm install
    ```
## Usage

To run the script, use the following commands:

    ```
    node app.js
    ```
    ```
    npm run start
    ```

## Testing

The script has a series of Jest tests. Run them using:

    ```
    npm run test
    ```

## Functions

Here are the main functions in the script:

- `loadJsonFile()`: This function reads and parses JSON data from `mock_application.json`.

- `filterDuplicates(dataList)`: This function removes duplicate entries from the given array `dataList`, based on the `key` property.

- `createCleanData()`: This function loads JSON data from a file using `loadJsonFile()`, filters out duplicate entries using `filterDuplicates()`, and returns the cleaned data.

- `saveCleanJson(cleanData)`: This function writes the cleaned data to `clean_application.json` in a human-readable format.

A detailed documentation of all the functions used in the project can be found in the JSDoc documentation. Navigate to the [JSDoc documentation](./documentation/index.html) for more information.

## Contributing

Any feedback regarding this exercise is greatly appreciated.

## License

This project is licensed under the GNU v3 License - see the LICENSE file for more details.

## Contact

Jose Angel Fernandez Betancourt - jafbeta@outlook.com
