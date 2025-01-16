const newsSchema = `
    CREATE TABLE IF NOT EXISTS profiles (
        id_news VARCHAR(255) UNIQUE NOT NULL,
        id_area VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255),
        author VARCHAR(255),
        content VARCHAR(255) NOT NULL,
        date VARCHAR(255),
        user VARCHAR(255)
    )
`;

module.exports = newsSchema;
