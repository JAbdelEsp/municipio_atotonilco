const transparencySchema = `
    CREATE TABLE IF NOT EXISTS profiles (
        id VARCHAR(255) UNIQUE NOT NULL,
        article VARCHAR(255) UNIQUE NOT NULL,
        year VARCHAR(255) NOT NULL,
        fraction VARCHAR(255) NOT NULL,
        firstTrimester VARCHAR(255),
        secondTrimester VARCHAR(255),
        thirdTrimester VARCHAR(255),
        fourthTrimester VARCHAR(255),
        user VARCHAR(255)
    )
`;

module.exports = transparencySchema;
