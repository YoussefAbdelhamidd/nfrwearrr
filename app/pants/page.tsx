import ProductGallery from '../components/ProductGallery';

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
    images: ['/pants/pants1.jpg', '/pants/pants5.jpg', '/pants/pants6.jpg' , '/pants/pants2.jpg'],
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
    image: '/pants/pants3.jpg',
    images: ['/pants/pants3.jpg', '/pants/pants2.jpg', '/pants/pants4.jpg', '/pants/pants7.jpg'],
    sizes: ['S', 'M', 'L', 'XL',],
    stock: {
      'S': 5,
      'M': 5,
      'L': 5,
    },
  },
];

export default function PantsPage() {
  return (
    <ProductGallery
      products={pants}
      title="Pants"
      titleAr="البناطيل"
    />
  );
}
