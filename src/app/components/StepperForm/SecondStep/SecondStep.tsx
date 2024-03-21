import React from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const SecondStep = ({ control }: any) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Controller
        name="about_offer"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Расскажите о продукте или услуге"
            fullWidth
            placeholder='Какой у вас продукт или услуга? Распишите все подробно / детально?'
            size='small'
          />
        )}
      />
      <Controller
        name="advantages"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Приемущества"
            fullWidth
            placeholder='Конкурентные преимущества 5-7
            по каждому продукту или услуге
            '
            size='small'
          />
        )}
      />
      <Controller
        name="why_choose"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Почему выбирают вас?"
            fullWidth
            placeholder='Почему существующие клиенты выбирают именно Вас? Почему покупают у вас?'
            size='small'
          />
        )}
      />
      <Controller
        name="disadvantages"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Расскажите о недостатках"
            fullWidth
            placeholder='Сравните товар или услугу с аналогами. Честно укажите недостатки'
            size='small'
          />
        )}
      />
      <Controller
        name="about_product"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Как устроен продукт или услуга?"
            fullWidth
            placeholder='Расскажите как устроен продукт? Из каких частей он состоит?'
            size='small'
          />
        )}
      />
      <Controller
        name="customers"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Расскажите про ЦА(Целевую аудиторию)"
            fullWidth
            placeholder='Общее описание ЦА
            Кто является вашей ЦА, кто будет заходить на сайт? 
            '
            size='small'
          />
        )}
      />
      <Controller
        name="cusomers_income"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Достаток вашей ЦА"
            fullWidth
            placeholder='Социальный статус. Средний достаток, высокий, VIP и т.д'
            size='small'
          />
        )}
      />
      <Controller
        name="customers_age"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Возраст вашей ЦА?"
            fullWidth
            placeholder='Желательно указать минимальный и максимальный возраст ЦА, а также желаемый возраст вашей ЦА'
            size='small'
          />
        )}
      />
      <Controller
        name="cusomers_location"
        control={control}
        render={({ field }) => (<TextField
          {...field}

          id="outlined-multiline-flexible"
          label="География"
          fullWidth
          placeholder='География. Где находятся Ваши клиенты'
          size='small'
        />
        )}
      />
    </Box>
  )
}

export default SecondStep