const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Primeiros testes', () => {
    const expected = { Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Lançando erro', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow();
  });
  it('Mensagens de erro', () => {
    const what = 'hour';
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(new Error(`The ${what} should represent a number`));
    expect(() => { getOpeningHours('Friday', '09:00-ZN'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => { getOpeningHours('Sunday', '19:00-AM'); }).toThrow(new Error('The hour must be between 0 and 12'));
    expect(() => { getOpeningHours('Thursday', '09:80-AM'); }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Outros erros', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Saturday', '19:00-AM')).toThrow();
    expect(getOpeningHours('Sunday', '19:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
    expect(getOpeningHours('sexta-feira')).toThrow();
  });
  it('erros de hora/dia', () => {
    const dayError = 'The day must be valid. Example: Monday';
    expect(getOpeningHours('sexta-feira', '09:00-AM')).toThrow(new Error(dayError));
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow(new Error(dayError));
    expect(getOpeningHours(145)).toThrow(new Error(dayError));
    expect(getOpeningHours(true)).toThrow(new Error(dayError));
  });
  it('Aberto e Fechado', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
