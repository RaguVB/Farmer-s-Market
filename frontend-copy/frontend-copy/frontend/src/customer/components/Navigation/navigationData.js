export const navigation = {
    categories: [
      {
        id: 'plush',
        name: 'Plush Toys',
        hoverClass: 'transition-colors duration-300 py-2 px-4 rounded cursor-pointer hover:bg-blue-700 hover:text-white',
        featured: [
          {
            name: 'New Arrivals of toys',
            href: '/',
            imageSrc: 'https://media.istockphoto.com/id/1438419394/photo/yellow-elephant-doll-things-with-red-background.jpg?s=612x612&w=0&k=20&c=UX7MKppbcehBIsf13NhxqY340nR_0UCKBZyutEB-Qg4=',
            //imageSrc: 'https://media.istockphoto.com/id/1227653338/photo/pink-car-transporting-christmas-gift-christmas-holiday-background.jpg?s=612x612&w=0&k=20&c=fQqRCEwK_t1HEftHC3jdRhj735TXjN2z4rj36pwCLkE=',
            //imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          // {
          //   name: 'Basics',
          //   href: '/',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          //   //imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          // },
        ],
        sections: [
          {
            id: 'birds',
            name: 'Toys for girls',
            items: [
              { name: 'Soft Toys', id:"double", href: `{women/clothing/tops}` },
              { name: 'Birds', id:"siblings", href: '#' },
              { name: 'Double soft toys', id: 'double' },
              // { name: '', id: 'lengha_choli' },
              // { name: 'Sweaters', id: 'sweater' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: 'jacket' },
              // { name: 'Gouns', id: 'gouns' },
              // { name: 'Sarees', id: 'saree' },
              // { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Toys model',
            items: [
              { name: 'Soft cotton', id: 'watch' },
              { name: 'Woollen', id: 'wallet' },
              { name: 'Nylon', id: 'bag' },
              // { name: 'Sunglasses', id: 'sunglasse' },
              // { name: 'Hats', id: 'hat' },
              // { name: 'Belts', id: 'belt' },
            ],
          },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Significant Other', id: '#' },
          //   ],
          // },
        ],
      },
      {
        id: 'car',
        name: 'Car Toys',
        featured: [
          {
            name: 'New Arrivals of Toys',
            id: '#',
            imageSrc: 'https://media.istockphoto.com/id/1227653338/photo/pink-car-transporting-christmas-gift-christmas-holiday-background.jpg?s=612x612&w=0&k=20&c=fQqRCEwK_t1HEftHC3jdRhj735TXjN2z4rj36pwCLkE=',
            //imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'wooden',
            name: 'Toys for boys',
            items: [
              { name: 'Electrical cars', id: 'electrical' },
              { name: 'Wooden', id: 'kids' },
              { name: 'Remote control', id: 'remote' },
              // { name: 'Sweaters', id: '#' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: '#' },
              // { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'For everyone',
            items: [
              { name: 'For kids', id: '#' },
              { name: 'For adults', id: '#' },
              // { name: 'Bags', id: '#' },
              // { name: 'Sunglasses', id: '#' },
              // { name: 'Hats', id: '#' },
              // { name: 'Belts', id: '#' },
            ],
          },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //   ],
          // },
        ],
      },
      {
        id: 'educational',
        name: 'Educational Toys',
        featured: [
          {
            name: 'New Arrivals of Toys',
            id: '#',
            imageSrc: 'https://tse2.mm.bing.net/th?id=OIP.LjuMxLTJzjPtMoAz7g4AzwAAAA&pid=Api&P=0&h=180',
            //imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'science',
            name: 'Brain Builders for kids',
            items: [
              { name: 'Knowledge Nuggets', id: 'edu' },
              { name: 'Edu-Toys', id: 'edu' },
              // { name: 'Remote control', id: 'remote' },
              // { name: 'Sweaters', id: '#' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: '#' },
              // { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'For everyone',
            items: [
              { name: 'For kids', id: '#' },
              { name: 'For adults', id: '#' },
              // { name: 'Bags', id: '#' },
              // { name: 'Sunglasses', id: '#' },
              // { name: 'Hats', id: '#' },
              // { name: 'Belts', id: '#' },
            ],
          },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //   ],
          // },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }