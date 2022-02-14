const age =require('./age');

describe('Can you drive?', () => {

    test('Can drive', () => {
        expect(age(30)).toEqual('Can drive');
    });

    test("Can't drive", () => {
        expect(age(15)).toEqual('Can not drive');
    });
})