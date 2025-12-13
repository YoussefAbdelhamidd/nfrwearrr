import ProductGallery from '../components/ProductGallery';
import { useLanguage } from '../contexts/LanguageContext';

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
    images: ['/bundles/bundle3.jpg', '/bundles/bundle2.jpg', '/bundles/budle1.jpg'],
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

export default function BundlesPage() {
  return (
    <ProductGallery
      products={bundles}
      title="Bundles"
      titleAr="الباقات"
    />
  );
}
