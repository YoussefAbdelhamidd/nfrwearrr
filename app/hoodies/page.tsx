import ProductGallery from '../components/ProductGallery';

// Product data for hoodies
const hoodies = [
  {
    id: 'hoodie1',
    name: 'NFR Black Hoodie',
    nameAr: 'هودي اسود NFR',
    description: 'Ultra-soft hoodie with perfect fit. Made from premium cotton blend for maximum comfort.',
    descriptionAr: 'سترة ناعمة جداً بقصة مثالية. مصنوعة من مزيج قطن عالي الجودة لأقصى راحة.',
    price: 850.00,
    originalPrice: 900.00,
    image: '/hoodies/hoodie1.jpg',
    images: ['/hoodies/hoodie1.jpg', '/hoodies/hoodie4.jpg', '/hoodies/hoodie2.jpg', '/hoodies/hoodie8.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
  {
    id: 'hoodie3',
    name: 'NFR Grey Hoodie',
    nameAr: "هودي رمادي NFR",
    description: 'Classic hoodie with contemporary twist. Versatile piece for any casual outfit.',
    descriptionAr: 'سترة كلاسيكية مع لمسة عصرية. قطعة متعددة الاستخدامات لأي زي كاجوال.',
    price: 850.00,
    originalPrice: 900.00,
    image: '/hoodies/hoodie3.jpg',
    images: ['/hoodies/hoodie5.jpg',  '/hoodies/hoodie7.jpg', '/hoodies/hoodie6.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
];

export default function HoodiesPage() {
  return (
    <ProductGallery
      products={hoodies}
      title="Hoodies"
      titleAr="السترات"
    />
  );
}
