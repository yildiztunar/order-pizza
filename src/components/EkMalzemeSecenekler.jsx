import React from 'react';

function EkMalzemeSecenekler({ ekMalzemeler, handleChange }) {
  const malzemeListesi = [
    { label: 'Pepperoni', value: 'Pepperoni', dataCy: 'checkbox-1' },
    { label: 'Sosis', value: 'Sosis', dataCy: 'checkbox-2' },
    { label: 'Kanada Jambonu', value: 'Kanada Jambonu', dataCy: 'checkbox-3' },
    { label: 'Tavuk Izgara', value: 'Tavuk Izgara', dataCy: 'checkbox-4' },
    { label: 'Soğan', value: 'Sogan' },
    { label: 'Domates', value: 'Domates' },
    { label: 'Mısır', value: 'Misir' },
    { label: 'Sucuk', value: 'Sucuk' },
    { label: 'Jalepeno', value: 'Jalepeno' },
    { label: 'Sarımsak', value: 'Sarimsak' },
    { label: 'Biber', value: 'Biber' },
    { label: 'Sucuk2', value: 'Sucuk2' },
    { label: 'Ananas', value: 'Ananas' },
    { label: 'Kabak', value: 'Kabak' }
  ];

  return (
    <div>
      {malzemeListesi.map((malzeme, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name="ekMalzemeler"
            value={malzeme.value}
            checked={ekMalzemeler.includes(malzeme.value)}
            onChange={handleChange}
            data-cy={malzeme.dataCy}
          />
          {malzeme.label}
        </label>
      ))}
    </div>
  );
}

export default EkMalzemeSecenekler;