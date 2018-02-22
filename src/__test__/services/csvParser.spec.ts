import { expect } from 'chai';
import csvParser from '../../services/csvParser'

describe('csvParser', () => {
    let unparsedString = "name,emailAddress\nWarren Sadler, warren@newscart.co\nJessie Wooten, jessie@newscart.co"
    let expectedResult = [
        {
            name: "Warren Sadler",
            emailAddress: "warren@newscart.co"
        },
        {
            name: "Jessie Wooten",
            emailAddress: "jessie@newscart.co"
        }
    ];

    it('can extract contacts from a csvFormatted string', () => {
        expect(csvParser.extractContacts(unparsedString)).to.eql(expectedResult);
    });
});