import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S21',
      description: 'Experience cutting-edge performance with a stunning display and advanced camera system.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-6-gb-128-gb-seryi-grafit--106336742/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/hd2/86042947977246.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/h55/86042948010014.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h70/h40/86042948042782.png?format=gallery-medium'
      ]
    },
    {
      id: 2,
      name: 'Apple iPhone 13',
      description: 'Discover the power of the new iPhone 13 with improved battery life and a revolutionary camera system.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
      ]
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 10',
      description: 'A budget-friendly smartphone featuring a vibrant AMOLED display and long-lasting battery performance.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h74/64487156645918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h6b/64487158284318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h82/64487159398430.jpg?format=gallery-medium'
      ]
    },
    {
      id: 4,
      name: 'OnePlus 13R',
      description: 'A high-performance smartphone with a sleek design and robust camera setup.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/oneplus-13r-12-gb-256-gb-chernyi-132466811',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p7f/24035970.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/p7f/24035971.jpg?format=gallery-medium'
      ]
    },
    {
      id: 5,
      name: 'Huawei P70 Pro',
      description: 'Enjoy advanced photography and dynamic design with the Huawei P70 Pro, built for modern users.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-chernyi-120278768',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hde/86302132928542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h29/h08/86302132994078.jpg?format=gallery-medium'
      ]
    },
    {
      id: 6,
      name: 'Google Pixel 7',
      description: 'Experience the ultimate Google smartphone with Pixel 7’s intuitive interface and powerful AI features.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-256-gb-belyi-107066176',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/haf/63603321208862.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/ha2/63603321733150.jpg?format=gallery-medium'
      ]
    },
    {
      id: 7,
      name: 'Samsung Galaxy Buds Pro',
      description: 'Enjoy superior sound quality and active noise cancellation with Galaxy Buds Pro.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzsacis-serebristyi-100956033',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h39/63969365229598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/ha8/63969367261214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h61/63969376108574.jpg?format=gallery-medium'
      ]
    },
    {
      id: 8,
      name: 'Apple AirPods Pro 2',
      description: 'Experience immersive sound and active noise cancellation with Apple AirPods Pro.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ]
    },
    {
      id: 9,
      name: 'Xiaomi Mi Band 6',
      description: 'Keep track of your fitness with Xiaomi Mi Band 6 featuring a vibrant display and long battery life.',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-6-global-version-chernyi-101380052',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/ha6/64344455872542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h4a/64344459804702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h58/64344462229534.jpg?format=gallery-medium'
      ]
    },
    {
      id: 10,
      name: 'Fitbit Charge 6',
      description: 'Stay active and monitor your health with Fitbit Charge 6, featuring advanced tracking and built-in GPS.',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/fitbit-charge-6-serebristyi-bezhevyi-114939591',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h67/84597271232542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h33/84597271298078.jpg?format=gallery-medium'
      ]
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getFilteredProducts(rating: number): Product[] {
    return this.products.filter(product => product.rating >= rating);
  }
}
