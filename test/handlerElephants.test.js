const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('undefined', () => {
    expect(handlerElephants()).toBeUndefined();
    // expect(handlerElephants.avarageAge()).toBeUndefined();
    // expect(handlerElephants.computeData()).toBeUndefined();
    // expect(handlerElephants.handlerElephants()).toBeUndefined();
  });
  it('Testes getElephants', () => {
    const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    const actual = 'elephants';
    const expected = {
      id: elephantsId,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    };
    expect(handlerElephants(actual)).toEqual(expected);
  });
  it('Testes avarageAge', () => {
    expect(handlerElephants('elephants')).toBeCloseTo(10.5);
    // expect(handlerElephants('elephants')).not.toBe('10.5');
  });
  it('Testes computeData', () => {
    expect(handlerElephants('count', 'elephant')).toBe(4);
    // expect(handlerElephants('count', 'elephant')).not.toEqual('4');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names', 'elephant')).toStrictEqual(expected);
    expect(handlerElephants('averageAge', 'elephant')).toBe(10.5);
    // expect(handlerElephants('names', 'lions')).toBeNull();
    // expect(handlerElephants('count', 'bears')).toBeNull();
  });
  it('Testes handlerElephants', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(10)).toBe(expected);
    expect(handlerElephants(true)).toBe(expected);
    expect(handlerElephants(false)).toBe(expected);
    expect(handlerElephants(10)).toBe(expected);
  });
});
