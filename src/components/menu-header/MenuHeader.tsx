import { FC } from 'react'
import {
  Container,
  ExitHov,
  ExitIcon,
  MenuLink,
  PolygonImg,
  PolygonImgContainer,
  ReportsDropDown,
} from './styled'

interface IProps {
  open: boolean
  item: string
  onCloseReports: (value: number | false) => void
}
const MenuHeader: FC<IProps> = ({ open, item, onCloseReports }) => {
  const forecastMenu = [
    {
      name: 'Статистика по прогнозам',
      link: 'forecast_statistics',
    },
    {
      name: 'Прогноз',
      link: 'forecast',
    },
  ]

  const referencуBooks = [
    {
      name: 'Точки и адреса доставки',
      link: 'adress',
    },
    {
      name: 'Регионы',
      link: 'forecast_statistics',
    },
    {
      name: 'SKU',
      link: 'sku',
    },
    {
      name: 'Актуальные цены',
      link: 'prices',
    },
    {
      name: 'Прогнозируемые цены',
      link: 'frsctprices',
    },
    {
      name: 'База товаров',
      link: 'data_items',
    },
    {
      name: 'Склады',
      link: 'stocks',
    },
  ]

  const reports = [
    {
      name: 'Отчёт по прогнозам',
      link: 'reports',
    },
    {
      name: 'Отчёт по срокам исполнения',
      link: 'data_reports',
    },
  ]

  const logIn = [
    {
      name: 'Личный кабинет',
      link: 'profile',
    },
    {
      name: 'Мои данные',
      link: 'userInfo',
    },
    {
      name: 'Выход',
      link: 'login',
    },
  ]

  return (
    <Container open={open} item={item}>
      <PolygonImgContainer item={item}>
        <PolygonImg />
      </PolygonImgContainer>

      <ReportsDropDown>
        {item === 'Прогнозы' &&
          forecastMenu.map((item) => (
            <MenuLink
              key={item.name}
              to={item.link}
              onClick={() => onCloseReports(false)}
            >
              {item.name}
            </MenuLink>
          ))}
        {item === 'Отчеты' &&
          reports.map((item) => (
            <MenuLink
              key={item.name}
              to={item.link}
              onClick={() => onCloseReports(false)}
            >
              {item.name}
            </MenuLink>
          ))}
        {item === 'Справочники' &&
          referencуBooks.map((item) => (
            <MenuLink
              key={item.name}
              to={item.link}
              onClick={() => onCloseReports(false)}
            >
              {item.name}
            </MenuLink>
          ))}
        {item === 'LogIn' &&
          logIn.map((item) =>
            item.name === 'Выход' ? (
              <MenuLink
                key={item.name}
                item={item.name}
                to={item.link}
                onClick={() => onCloseReports(false)}
              >
                <ExitIcon />
                <ExitHov />
                {item.name}
              </MenuLink>
            ) : (
              <MenuLink
                key={item.name}
                to={item.link}
                onClick={() => onCloseReports(false)}
              >
                {item.name}
              </MenuLink>
            )
          )}
      </ReportsDropDown>
    </Container>
  )
}

export default MenuHeader
