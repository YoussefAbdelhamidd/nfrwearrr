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
    images: ['/hoodies/hoodie1.jpg', '/hoodies/hoodie2.jpg', '/hoodies/hoodie5.jpg', '/hoodies/hoodie6.jpg'],
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
    images: ['/hoodies/hoodie3.jpg', '/hoodies/hoodie4.jpg', '/hoodies/hoodie7.jpg', '/hoodies/hoodie10.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
];

// Product data for pants
const pants = [
  {
    id: 'pants1',
    name: 'NFR Black Pants',
    nameAr: 'بنطلون اسود NFR',
    description: 'Comfortable and stylish pants made from premium materials. Perfect fit for everyday wear.',
    descriptionAr: 'بنطلون مريح وأنيق مصنوع من مواد عالية الجودة. قصة مثالية للملابس اليومية.',
    price: 850,
    originalPrice: 900,
    image: '/pants/pants1.jpg',
    images: ['/pants/pants1.jpg', '/pants/pants5.jpg', '/pants/pants6.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
  {
    id: 'pants2',
    name: 'NFR Grey Pants',
    nameAr: 'بنطلون رمادي NFR',
    description: 'Modern design with exceptional comfort. Ideal for both casual and semi-formal occasions.',
    descriptionAr: 'تصميم عصري مع راحة استثنائية. مثالي للمناسبات الكاجوال وشبه الرسمية.',
    price: 850,
    originalPrice: 900,
    image: '/pants/pants2.jpg',
    images: ['/pants/pants2.jpg', '/pants/pants3.jpg', '/pants/pants4.jpg', '/pants/pants7.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
];

// Product data for bundles
const bundles = [
  {
    id: 'bundle1',
    name: 'NFR Black Set',
    nameAr: 'NFR طقم اسود',
    description: 'A complete outfit bundle featuring premium quality hoodie and pants. Perfect for casual wear with style and comfort.',
    descriptionAr: 'باقة ملابس كاملة تتميز بسترة وبنطلون عالي الجودة. مثالية للملابس الكاجوال مع الأناقة والراحة.',
    price: 1680,
    originalPrice: 1800,
    image: '/bundles/bundle2.jpg',
    images: ['/bundles/budle1.jpg', '/bundles/bundle2.jpg', '/bundles/bundle3.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
  {
    id: 'bundle4',
    name: 'NFR Grey Set',
    nameAr: 'NFR طقم رمادي',
    description: 'Limited edition bundle featuring exclusive designs. Stand out with this unique collection.',
    descriptionAr: 'باقة إصدار محدود تتميز بتصاميم حصرية. تميز بهذه المجموعة الفريدة.',
    price: 1680,
    originalPrice: 1800,
    image: '/bundles/bundle4.jpg',
    images: ['/bundles/bundle4.jpg', '/bundles/bundle5.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
];

// Combine all products
const allProducts = [...hoodies, ...pants, ...bundles];

export default function ShopPage() {
  return (
    <ProductGallery
      products={allProducts}
      title="Shop"
      titleAr="المتجر"
    />
  );
}

