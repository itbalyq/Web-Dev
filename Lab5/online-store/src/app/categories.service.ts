import { inject, Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  protected categories: Category[] = [
    {
      category: "Smartphones",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy S21",
          description: "Experience cutting-edge performance with a stunning display and advanced camera system.",
          rating: 4.5,
          likes: 11,
          link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-6-gb-128-gb-seryi-grafit--106336742/",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hdd/hd2/86042947977246.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hd2/h55/86042948010014.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h70/h40/86042948042782.png?format=gallery-medium"
          ]
        },
        {
          id: 2,
          name: "Apple iPhone 13",
          description: "Discover the power of the new iPhone 13 with improved battery life and a revolutionary camera system.",
          rating: 4.7,
          likes: 15,
          link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium"
          ]
        },
        {
          id: 3,
          name: "Xiaomi Redmi Note 10",
          description: "A budget-friendly smartphone featuring a vibrant AMOLED display and long-lasting battery performance.",
          rating: 4.3,
          likes: 9,
          link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h94/h74/64487156645918.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hb7/h6b/64487158284318.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h0a/h82/64487159398430.jpg?format=gallery-medium"
          ]
        },
        {
          id: 4,
          name: "OnePlus 13R",
          description: "A high-performance smartphone with a sleek design and robust camera setup.",
          rating: 4.4,
          likes: 10,
          link: "https://kaspi.kz/shop/p/oneplus-13r-12-gb-256-gb-chernyi-132466811",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pf6/p7f/24035970.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pda/p7f/24035971.jpg?format=gallery-medium"
          ]
        },
        {
          id: 5,
          name: "Huawei P70 Pro",
          description: "Enjoy advanced photography and dynamic design with the Huawei P70 Pro, built for modern users.",
          rating: 4.2,
          likes: 8,
          link: "https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-chernyi-120278768",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc6/hde/86302132928542.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h29/h08/86302132994078.jpg?format=gallery-medium"
          ]
        }
      ]
    },
    {
      category: "Headphones",
      products: [
        {
          id: 7,
          name: "Samsung Galaxy Buds Pro",
          description: "Enjoy superior sound quality and active noise cancellation with Galaxy Buds Pro.",
          rating: 4.4,
          likes: 7,
          link: "https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzsacis-serebristyi-100956033",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h41/h39/63969365229598.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h3e/ha8/63969367261214.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc3/h61/63969376108574.jpg?format=gallery-medium"
          ]
        },
        {
          id: 8,
          name: "Apple AirPods Pro 2",
          description: "Experience immersive sound and active noise cancellation with Apple AirPods Pro.",
          rating: 4.8,
          likes: 12,
          link: "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium"
          ]
        },
        {
          id: 11,
          name: "Sony WH-1000XM4",
          description: "Immerse yourself in high-quality sound with Sony WH-1000XM4 headphones featuring advanced noise cancellation.",
          rating: 4.6,
          likes: 17,
          link: "https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pd5/pde/11569146.jpg?format=gallery-medium"
          ]
        },
        {
          id: 12,
          name: "JBL Tune 510BT",
          description: "Experience powerful bass and wireless freedom with JBL Tune 510BT headphones.",
          rating: 4.2,
          likes: 3,
          link: "https://kaspi.kz/shop/p/jbl-tune-520bt-chernyi-110103473",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h3e/h87/80522158211102.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h40/hac/86333130899486.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h41/h43/86333130932254.jpg?format=gallery-medium"
          ]
        },
        {
          id: 13,
          name: "Bose QuietComfort 45",
          description: "Enjoy premium sound quality and comfort with Bose QuietComfort 45 headphones.",
          rating: 4.7,
          likes: 14,
          link: "https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102978612",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hd1/h68/64374656434206.jpg?format=gallery-medium"
          ]
        }
      ]
    },
    {
      category: "Smartwatches",
      products: [
        {
          id: 9,
          name: "Xiaomi Mi Band 6",
          description: "Keep track of your fitness with Xiaomi Mi Band 6 featuring a vibrant display and long battery life.",
          rating: 4.1,
          likes: 5,
          link: "https://kaspi.kz/shop/p/xiaomi-mi-band-6-global-version-chernyi-101380052",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/ha2/ha6/64344455872542.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h3c/h4a/64344459804702.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h66/h58/64344462229534.jpg?format=gallery-medium"
          ]
        },
        {
          id: 10,
          name: "Fitbit Charge 6",
          description: "Stay active and monitor your health with Fitbit Charge 6, featuring advanced tracking and built-in GPS.",
          rating: 4.0,
          likes: 4,
          link: "https://kaspi.kz/shop/p/fitbit-charge-6-serebristyi-bezhevyi-114939591",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hb1/h67/84597271232542.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h5c/h33/84597271298078.jpg?format=gallery-medium"
          ]
        },
        {
          id: 14,
          name: "Garmin Venu 2",
          description: "Experience advanced health tracking and vibrant display with Garmin Venu 2 smartwatch.",
          rating: 4.3,
          likes: 6,
          link: "https://kaspi.kz/shop/p/garmin-venu-2-plus-chernyi-103552261",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h63/h37/64183902273566.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h1e/h52/64183905353758.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/64183907745822.jpg?format=gallery-medium"
          ]
        },
        {
          id: 15,
          name: "Apple Watch Series 10 M/L",
          description: "Stay connected and track your fitness with Apple Watch Series 10 featuring a larger display and faster charging.",
          rating: 4.8,
          likes: 210,
          link: "https://kaspi.kz/shop/p/apple-watch-series-10-m-l-46-mm-chernyi-128572958",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p0c/p77/3341806.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p29/p77/3341807.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p45/p77/3341808.png?format=gallery-medium"
          ]
        },
        {
          id: 16,
          name: "Samsung Galaxy Watch Ultra",
          description: "Monitor your health and stay connected with Samsung Galaxy Watch Ultra featuring advanced fitness tracking and long battery life.",
          rating: 4.5,
          likes: 80,
          link: "https://kaspi.kz/shop/p/samsung-galaxy-watch-ultra-47-mm-seryi-oranzhevyi-121692620",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h4d/h21/86594255814686.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hf5/hff/86681918210078.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hed/h6b/86681918341150.png?format=gallery-medium"
          ]
        }
      ]
    },
    {
      category: "Laptops",
      products: [
        {
          id: 6,
          name: "Apple MacBook Pro 16",
          description: "Experience powerful performance and stunning display with Apple MacBook Pro 16, designed for creative professionals.",
          rating: 4.9,
          likes: 20,
          link: "https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-16-gb-ssd-512-gb-macos-mk183-102892102",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium"
          ]
        },
        {
          id: 17,
          name: "Dell XPS 15",
          description: "Experience premium performance and stunning display with Dell XPS 15, designed for creative professionals.",
          rating: 4.7,
          likes: 18,
          link: "https://kaspi.kz/shop/p/dell-xps-15-9500-15-6-16-gb-ssd-512-gb-win-11-pro-p91f001-135093177",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p93/p90/26151126.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p5a/p90/26151128.jpg?format=gallery-medium"
          ]
        },
        {
          id: 18,
          name: "HP Spectre x360",
          description: "Experience premium design and versatile performance with HP Spectre x360, designed for modern users.",
          rating: 4.6,
          likes: 19,
          link: "https://kaspi.kz/shop/p/hp-spectre-x360-14-eu0007ci-14-16-gb-ssd-512-gb-win-11-a1aa3ea-124551853",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hfd/hb6/87360507084830.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hfd/hb6/87360507084830.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hf3/h2d/87360507215902.png?format=gallery-medium"
          ]
        },
        {
          id: 19,
          name: "Lenovo ThinkPad X1 Carbon",
          description: "Experience premium performance and durability with Lenovo ThinkPad X1 Carbon, designed for business professionals.",
          rating: 4.5,
          likes: 16,
          link: "https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-g12-14-32-gb-ssd-1024-gb-win-11-pro-21kc00byrt-135170663",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/pe4/p6a/26418979.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p78/p68/26418980.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p5c/p68/26418981.png?format=gallery-medium"
          ]
        },
        {
          id: 20,
          name: "Asus ZenBook Pro Duo",
          description: "Experience dual-screen productivity and powerful performance with Asus ZenBook Pro Duo, designed for creative professionals.",
          rating: 4.4,
          likes: 13,
          link: "https://kaspi.kz/shop/p/asus-zenbook-pro-14-duo-14-5-16-gb-ssd-1024-gb-win-11-ux8402vu-p1036w-90nb10x2-m003c0-110711690",
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h5f/hde/81122690990110.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hcc/ha6/81122691055646.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h0c/h2d/81122691121182.jpg?format=gallery-medium"
          ]
        }
      ]
    }
  ];

  sessionService: SessionService = inject(SessionService);

  constructor() { }

  getCategoryNames(): string[] {
    return this.categories.map((category) => category.category);
  }

  getAllProducts(): Product[] {
    return this.categories
      .flatMap((category) => category.products)
      .filter((product) => !this.sessionService.isProductRemoved(product.id));
  }

  getLikedProducts(): Product[] {
    return this.categories
      .flatMap((category) => category.products)
      .filter((product) => this.sessionService.isProductLiked(product.id));
  }

  getRemovedProducts(): Product[] {
    return this.categories
      .flatMap((category) => category.products)
      .filter((product) => this.sessionService.isProductRemoved(product.id));
  }

  getProductsByCategory(categoryName: string): Product[] {
    for (let category of this.categories) {
      if (category.category.toLowerCase() === categoryName) {
        return category.products.filter((product) => !this.sessionService.isProductRemoved(product.id));
      }
    }
    return [];
  }

  incrementLikes(productId: number): void {
    for (let [categoryIdx, category] of this.categories.entries()) {
      for (let [productIdx, product] of category.products.entries()) {
        if (productId === product.id) {
          this.categories[categoryIdx].products[productIdx].likes++;
        }
      }
    }
  }

  decrementLikes(productId: number): void {
    for (let [categoryIdx, category] of this.categories.entries()) {
      for (let [productIdx, product] of category.products.entries()) {
        if (productId === product.id) {
          this.categories[categoryIdx].products[productIdx].likes--;
        }
      }
    }
  }
}
