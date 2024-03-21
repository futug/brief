import React from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const ThirdStep = ({ control }: any) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Controller
        name="brand_style"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Фирменный стиль"
            fullWidth
            placeholder='Есть ли у вас готовый фирменный стиль?'
            size='small'
          />
        )}
      />
      <Controller
        name="logo_source"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Логотип"
            fullWidth
            placeholder='Логотип в темном цвете и в светлом цвете
            Прикрепите ссылку на Яндекс Диск
            '
            size='small'
          />
        )}
      />
      <Controller
        name="color_scheme"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Цветовая гамма"
            fullWidth
            placeholder='Цветовая гамма. В каких цветах Вы видите свой сайт (светлый или темный)?'
            size='small'
          />
        )}
      />
      <Controller
        name="style_preference"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Желаемый стиль"
            fullWidth
            placeholder='Опишите нужный стиль
            Например больше графики, или минимализм, инфографика и т.д.)
            '
            size='small'
          />
        )}
      />
      <Controller
        name="how_the_product_works"
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
        name="design_references"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Референсы дизайна"
            fullWidth
            placeholder='
            Примеры, которые нравятся
Укажите ссылку на 4-5 работ, которые нравятся (сайты) и что именно в них нравится

            '
            size='small'
          />
        )}
      />
      <Controller
        name="additional_comments"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Пожелания"
            fullWidth
            placeholder='Комментарии к дизайну
            Здесь Вы можете написать любые комментарии на счет дизайна
            '
            size='small'
          />
        )}
      />
    </Box>
  )
}

export default ThirdStep