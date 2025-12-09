import ProductGallery from '../components/ProductGallery';

// Product data for pants
const pants = [
  {
    id: 'pants1',
    name: 'Premium Pants 1',
    nameAr: 'بنطلون عالي الجودة 1',
    description: 'Comfortable and stylish pants made from premium materials. Perfect fit for everyday wear.',
    descriptionAr: 'بنطلون مريح وأنيق مصنوع من مواد عالية الجودة. قصة مثالية للملابس اليومية.',
    price: 79.99,
    image: '/pants/pants1.jpg',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 'pants2',
    name: 'Premium Pants 2',
    nameAr: 'بنطلون عالي الجودة 2',
    description: 'Modern design with exceptional comfort. Ideal for both casual and semi-formal occasions.',
    descriptionAr: 'تصميم عصري مع راحة استثنائية. مثالي للمناسبات الكاجوال وشبه الرسمية.',
    price: 84.99,
    image: '/pants/pants2.jpg',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 'pants3',
    name: 'Premium Pants 3',
    nameAr: 'بنطلون عالي الجودة 3',
    description: 'Durable pants with contemporary style. Built to last while maintaining comfort.',
    descriptionAr: 'بنطلون متين بأسلوب معاصر. مصنوع ليدوم مع الحفاظ على الراحة.',
    price: 89.99,
    image: '/pants/pants3.jpg',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'pants4',
    name: 'Premium Pants 4',
    nameAr: 'بنطلون عالي الجودة 4',
    description: 'Classic fit with modern details. Versatile pants for any wardrobe.',
    descriptionAr: 'قصة كلاسيكية مع تفاصيل عصرية. بنطلون متعدد الاستخدامات لأي خزانة ملابس.',
    price: 79.99,
    image: '/pants/pants4.jpg',
    sizes: ['28', '30', '32', '34'],
  },
  {
    id: 'pants5',
    name: 'Premium Pants 5',
    nameAr: 'بنطلون عالي الجودة 5',
    description: 'Sleek design meets premium quality. Perfect for the modern individual.',
    descriptionAr: 'تصميم أنيق يلتقي بالجودة العالية. مثالي للفرد العصري.',
    price: 94.99,
    image: '/pants/pants5.jpg',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'pants6',
    name: 'Premium Pants 6',
    nameAr: 'بنطلون عالي الجودة 6',
    description: 'Comfort-first design with style. Your go-to pants for everyday comfort.',
    descriptionAr: 'تصميم يركز على الراحة مع الأناقة. بنطلونك المفضل للراحة اليومية.',
    price: 87.99,
    image: '/pants/pants6.jpg',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 'pants7',
    name: 'Premium Pants 7',
    nameAr: 'بنطلون عالي الجودة 7',
    description: 'Elite quality pants with exceptional craftsmanship. A statement piece for your collection.',
    descriptionAr: 'بنطلون بجودة نخبوية مع حرفية استثنائية. قطعة مميزة لمجموعتك.',
    price: 99.99,
    image: '/pants/pants7.jpg',
    sizes: ['30', '32', '34', '36'],
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
