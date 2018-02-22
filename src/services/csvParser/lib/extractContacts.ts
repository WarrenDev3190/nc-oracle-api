const parse = require('csv-parse/lib/sync');

const defaultConfig = {
    columns: true,
    trim: true
}

/**
 * 
 * @param contacts 
 * @param parserConfig 
 */
export default function extractContacts(contacts: any, parserConfig: object = defaultConfig): NewsCart.Contact[] {
    if (!Buffer.isBuffer(contacts)) return parse(contacts, parserConfig);
    return parse(contacts.toString('utf8'), parserConfig);
}