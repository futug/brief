import { mailOptions, transporter } from '../../config/nodemailer';
import { FormData } from '../../models/types';
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const formData: FormData = req.body;

    const markup = `
    <table>
      <tbody>
        <tr>
          <td>Название компании:</td>
          <td>${formData.company_name}</td>
        </tr>
        <tr>
          <td>Текущий сайт:</td>
          <td>${formData.current_site}</td>
        </tr>
        <tr>
          <td>Что хотелось бы изменить?</td>
          <td>${formData.need_to_fix}</td>
        </tr>
        <tr>
          <td>О компании:</td>
          <td>${formData.about_company}</td>
        </tr>
        <tr>
          <td>Как долго работает компания?</td>
          <td>${formData.how_long_work}</td>
        </tr>
        <tr>
          <td>Контакты:</td>
          <td>${formData.contacts}</td>
        </tr>
        <tr>
          <td>График работы:</td>
          <td>${formData.work_schedule}</td>
        </tr>
        <tr>
          <td>Текущий регион:</td>
          <td>${formData.current_region}</td>
        </tr>
        <tr>
          <td>Планируемый регион:</td>
          <td>${formData.planned_region}</td>
        </tr>
        <tr>
          <td>О продукте услуге:</td>
          <td>${formData.about_offer}</td>
        </tr>
        <tr>
          <td>Преимущества:</td>
          <td>${formData.advantages}</td>
        </tr>
        <tr>
          <td>Почему вы выбрали нас?</td>
          <td>${formData.why_choose}</td>
        </tr>
        <tr>
          <td>Недостатки:</td>
          <td>${formData.disadvantages}</td>
        </tr>
        <tr>
          <td>О продукте:</td>
          <td>${formData.about_product}</td>
        </tr>
        <tr>
          <td>Клиенты:</td>
          <td>${formData.customers}</td>
        </tr>
        <tr>
          <td>Доход:</td>
          <td>${formData.cusomers_income}</td>
        </tr>
        <tr>
          <td>Возраст:</td>
          <td>${formData.customers_age}</td>
        </tr>
        <tr>
          <td>Регион:</td>
          <td>${formData.cusomers_location}</td>
        </tr>
        <tr>
          <td>Фирменный стиль:</td>
          <td>${formData.brand_style}</td>
        <tr>
          <td>Источник логотипа:</td>
          <td>${formData.logo_source}</td>
        </tr>
        <tr>
          <td>Цветовая схема:</td>
          <td>${formData.color_scheme}</td>
        </tr>
        <tr>
          <td>Стиль предпочтений:</td>
          <td>${formData.style_preference}</td>
        </tr>
        <tr>
          <td>Как работает продукт:</td>
          <td>${formData.how_the_product_works}</td>
        </tr>
        <tr>
          <td>Референсы:</td>
          <td>${formData.design_references}</td>
          </tr>
          <tr>
          <td>Дополнительные комментарии:</td>
          <td>${formData.additional_comments}</td>
          </tr>
        <tr>
      </tbody>
    </table>
    `

    try {
      await transporter.sendMail({...mailOptions, text: "some text", html: markup});
    
    } catch (error) {
      console.error('Error sending form data:', error);
    }

    res.status(200).json({ formData });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
