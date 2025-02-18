const picturesSchema = `
    CREATE TABLE IF NOT EXISTS pictures (
        id VARCHAR(255) UNIQUE NOT NULL,
        id_news VARCHAR(255) UNIQUE NOT NULL,
        pic VARCHAR(255) NOT NULL,
    )
`;

module.exports = picturesSchema;
