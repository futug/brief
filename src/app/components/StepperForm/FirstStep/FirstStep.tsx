import React from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const FirstStep = ({ control }: any) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Controller
        name="company_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Название компании"
            fullWidth
            placeholder='Название вашей компании'
            size='small'
          />
        )}
      />
      <Controller
        name="current_site"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Ссылка на сайт"
            fullWidth
            placeholder='Ссылка на ваш сайт'
            size='small'
          />
        )}
      />
      <Controller
        name="need_to_fix"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Что бы вы хотели исправить?"
            fullWidth
            placeholder='Что не устраивает в существующем сайте'
            size='small'
          />
        )}
      />
      <Controller
        name="about_company"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Коротко о вашей компании"
            fullWidth
            placeholder='Коротко и понятно своими словами чем именно вы занимаетесь (1 предложение)'
            size='small'
          />
        )}
      />
      <Controller
        name="how_long_work"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Давно работаете?"
            fullWidth
            placeholder='Как давно на рынке? С какого года вы работаете?'
            size='small'
          />
        )}
      />
      <Controller
        name="contacts"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Контактные данные"
            fullWidth
            placeholder='Телефоны, email, ссылки на соц. сети - которые нужно разместить в вашем ПО, если это требуется'
            size='small'
          />
        )}
      />
      <Controller
        name="work_schedule"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="График работы"
            fullWidth
            placeholder='Время работы и график'
            size='small'
          />
        )}
      />
      <Controller
        name="current_region"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-flexible"
            label="Текущий регион"
            fullWidth
            placeholder='Регион, на который работаете сейчас'
            size='small'
          />
        )}
      />
      <Controller
        name="planned_region"
        control={control}
        render={({ field }) => (<TextField
          {...field}

          id="outlined-multiline-flexible"
          label="Планируемый регион"
          fullWidth
          placeholder='Регион, на который будете или планируете продвигаться'
          size='small'
        />
        )}
      />
    </Box>
  )
}

export default FirstStep